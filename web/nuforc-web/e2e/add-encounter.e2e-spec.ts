import * as mockserver from 'mockserver-client'
import {NuforcWebPage} from "./app.po";
import {browser, by, element} from "protractor";


describe('adding an encounter', () => {

  let page: NuforcWebPage;
  let mockServerClient:any;

  beforeEach(() => {
    mockServerClient = mockserver.mockServerClient('localhost', 9200);
    page = new NuforcWebPage();
    page.navigateTo();
  });

  it('can navigate to the add encounter page', () => {
    element(by.css('#report-encounter')).click();

    expect(element(by.css('#report-your-encounter-text')).getText()).toEqual('Report your encounter:');
  });

  it('can add a new encounter', () => {
    let expectedAddReportBody:any;
    expectedAddReportBody = {
      dateTime: '10/08/2017',
      city: 'Columbus',
      state: 'OH',
      shape: 'cigar',
      duration: 'test',
      summary: 'cigar shaped ufo',
      description: 'cigar shaped ufo'
    };
    let expectedAddReportStatusCode = 200;
    let expectedAddReportRequest = buildAddReportRequest(expectedAddReportBody);
    setAddReportExpectation(expectedAddReportRequest, expectedAddReportStatusCode, mockServerClient);

    let expectedSearchRequest = buildSearchRequest(expectedAddReportBody.description);
    let expectedSearchResponse = buildSearchResponse(200, buildSearchBody(expectedAddReportBody));
    setSearchExpectation(expectedSearchRequest, expectedSearchResponse, mockServerClient);

    element(by.css('#report-encounter')).click();

    element(by.css('#date-time')).sendKeys(expectedAddReportBody.dateTime);
    element(by.css('#city')).sendKeys(expectedAddReportBody.city);
    element(by.css('#state')).sendKeys(expectedAddReportBody.state);
    element(by.css('#shape')).sendKeys(expectedAddReportBody.shape);
    element(by.css('#duration')).sendKeys(expectedAddReportBody.duration);
    element(by.css('#summary')).sendKeys(expectedAddReportBody.summary);
    element(by.css('#description')).sendKeys(expectedAddReportBody.description);
    element(by.css('#submit')).click();

    element(by.css('#search-box')).sendKeys(expectedAddReportBody.description);
    element(by.css('#search-button')).click();

    expect(element(by.css('#encounter-summary')).getText()).toEqual(expectedAddReportBody.summary);
  });
});

let buildAddReportRequest = (expectedBody:any) => {
  return {
    method: 'POST',
    path: '/report',
    body: {
      type: 'JSON',
      matchType: 'STRICT',
      json: JSON.stringify(expectedBody)
    }
  };
};

let setAddReportExpectation = (expectedRequest: any, responseStatusCode: number, mockServerClient:any, expectedResponseBody:any = {}) =>  {

  mockServerClient.mockAnyResponse(
    {
      httpRequest: expectedRequest,
      httpResponse: {
        statusCode: responseStatusCode,
        headers: [
          {
            name: "Content-Type",
            values: ["application/json; charset=utf-8"]
          },
          {
            name: "Access-Control-Allow-Origin",
            values: ["*"]
          }
        ],
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

let setSearchExpectation = (request:any, response:any, mockServerClient:any):any => {
  mockServerClient.mockAnyResponse(
    {
      httpRequest: request,
      httpResponse: response,
      times: {
        unlimited: true
      }
    }
  );
};
