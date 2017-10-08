import * as mockserver from 'mockserver-client'
import {NuforcWebPage} from "./app.po";
import {browser, by, element} from "protractor";


describe('adding an encounter', () => {

  let page: NuforcWebPage;

  beforeEach(() => {
    page = new NuforcWebPage();
    page.navigateTo();
  });

  it('can navigate to the add encounter page', () => {
    element(by.css('#report-encounter')).click();

    expect(element(by.css('#report-your-encounter-text')).getText()).toEqual('Report your encounter:');
  });

  it('can add a new encounter', () => {
    let expectedAddReportRequest:any;
    expectedAddReportRequest = {
      dateTime: '10/08/2017',
      city: 'Columbus',
      state: 'OH',
      shape: 'cigar',
      duration: 'test',
      summary: 'cigar shaped ufo',
      description: 'cigar shaped ufo'
    };
    let expectedAddReportStatusCode = 200;
    setAddReportExpectation(expectedAddReportRequest, expectedAddReportStatusCode);

    let expectedSearchRequest = buildSearchRequest(expectedAddReportRequest.description);
    let expectedSearchResponse = buildSearchResponse(200, buildSearchBody(expectedAddReportRequest));
    setSearchExpectation(expectedSearchRequest, expectedSearchResponse);

    element(by.css('#report-encounter')).click();

    element(by.css('#date-time')).sendKeys(expectedAddReportRequest.dateTime);
    element(by.css('#city')).sendKeys(expectedAddReportRequest.city);
    element(by.css('#state')).sendKeys(expectedAddReportRequest.state);
    element(by.css('#shape')).sendKeys(expectedAddReportRequest.shape);
    element(by.css('#duration')).sendKeys(expectedAddReportRequest.duration);
    element(by.css('#summary')).sendKeys(expectedAddReportRequest.summary);
    element(by.css('#description')).sendKeys(expectedAddReportRequest.description);
    element(by.css('#submit')).click();

    element(by.css('#search-box')).sendKeys(expectedAddReportRequest.description);
    element(by.css('#search-button')).click();
    expect(element(by.css('#encounter-summary')).getText()).toEqual(expectedAddReportRequest.summary);
  });
});

let setAddReportExpectation = (expectedRequest: any, responseStatusCode: number, expectedResponseBody:any = {}) =>  {
  let mockServerClient = mockserver.mockServerClient;
  mockServerClient('localhost', 9200).mockAnyResponse(
    {
      httpRequest: {
        method: 'POST',
        path: '/report',
        body: {
          type: 'JSON',
          matchType: 'STRICT',
          json: JSON.stringify(expectedRequest)
        }
      },
      httpResponse: {
        statusCode: responseStatusCode,
        body: JSON.stringify(expectedResponseBody)
      },
      times: {
        unlimited: true
      }
    }
  );
};

let buildSearchRequest = (queryString:string):any => {
  return {
    method: 'POST',
    path: '/encounters/_search',
    body: {
      type: 'JSON',
      matchType: 'STRICT',
      json: JSON.stringify({
        query: {
          match: {
            description: queryString
          }
        },
        aggs : {
          shapes : {
            terms : {
              field : 'shape'
            }
          }
        }
      })
    }
  };
};

let buildSearchBody = (resultData:any) => {
  return {
    "took": 8,
    "timed_out": false,
    "_shards": {
      "total": 5,
      "successful": 5,
      "failed": 0
    },
    "hits": {
      "total": 29,
      "max_score": 0,
      "hits": [
        {
          "_index": "encounters",
          "_type": "encounter",
          "_id": "12345",
          "_score": 0.3627423,
          "_source": {
            "url": "",
            "date_time": resultData.dateTime,
            "city": resultData.city,
            "state": resultData.state,
            "shape": resultData.shape,
            "duration": resultData.duration,
            "summary": resultData.summary,
            "posted_date": "10/8/17",
            "description": resultData.description
          }
        }
      ]
    },
    "aggregations": {
      "shapes": {
        "doc_count_error_upper_bound": 0,
        "sum_other_doc_count": 6,
        "buckets": [
          {
            "key": resultData.shape,
            "doc_count": 1
          }
        ]
      }
    }
  };
};

let buildSearchResponse = (statusCode:number, body:any):any => {
  return {
    'statusCode': statusCode,
    'body': JSON.stringify(body),
    'headers': [
      {
        "name": "Content-Type",
        "values": ["application/json; charset=utf-8"]
      },
      {
        "name": "Access-Control-Allow-Origin",
        "values": ["*"]
      }
    ]
  }
};

let setSearchExpectation = (request:any, response:any):any => {
  let mockServerClient = mockserver.mockServerClient;
  mockServerClient('localhost', 9200).mockAnyResponse(
    {
      httpRequest: request,
      httpResponse: response,
      times: {
        unlimited: true
      }
    }
  );
};
