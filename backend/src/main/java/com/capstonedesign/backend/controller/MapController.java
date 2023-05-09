package com.capstonedesign.backend.controller;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.io.*;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.util.HashMap;
import java.util.Map;

@RestController
@Api(tags = "지도 관련 API")
public class MapController {

  @GetMapping("/search/place")
  @ApiOperation(value = "장소 검색 API", notes = "문자열을 요청 파라미터로 하여 장소 검색")
  public ResponseEntity<String> searchPlace(@RequestBody String keyword) {

    String clientId = "Client ID"; // Client ID 및 Client Secret은 자신의 인증 정보를 발급 후 수정
    String clientSecret = "Client Secret";


    String text;
    text = URLEncoder.encode(keyword, StandardCharsets.UTF_8);


    String apiURL = "https://openapi.naver.com/v1/search/local?query=" + text + "&display=10&start=1&sort=random";    // JSON 결과
    //String apiURL = "https://openapi.naver.com/v1/search/local.xml?query="+ text; // XML 결과


    Map<String, String> requestHeaders = new HashMap<>();
    requestHeaders.put("X-Naver-Client-Id", clientId);
    requestHeaders.put("X-Naver-Client-Secret", clientSecret);


    return ResponseEntity.ok().body(get(apiURL,requestHeaders));
  }

  private static String get(String apiUrl, Map<String, String> requestHeaders){
    HttpURLConnection con = connect(apiUrl);
    try {
      con.setRequestMethod("GET");
      for(Map.Entry<String, String> header :requestHeaders.entrySet()) {
        con.setRequestProperty(header.getKey(), header.getValue());
      }


      int responseCode = con.getResponseCode();
      if (responseCode == HttpURLConnection.HTTP_OK) { // 정상 호출
        return readBody(con.getInputStream());
      } else { // 오류 발생
        return readBody(con.getErrorStream());
      }
    } catch (IOException e) {
      throw new RuntimeException("API 요청과 응답 실패", e);
    } finally {
      con.disconnect();
    }
  }


  private static HttpURLConnection connect(String apiUrl){
    try {
      URL url = new URL(apiUrl);
      return (HttpURLConnection)url.openConnection();
    } catch (MalformedURLException e) {
      throw new RuntimeException("API URL이 잘못되었습니다. : " + apiUrl, e);
    } catch (IOException e) {
      throw new RuntimeException("연결이 실패했습니다. : " + apiUrl, e);
    }
  }


  private static String readBody(InputStream body){
    InputStreamReader streamReader = new InputStreamReader(body);


    try (BufferedReader lineReader = new BufferedReader(streamReader)) {
      StringBuilder responseBody = new StringBuilder();


      String line;
      while ((line = lineReader.readLine()) != null) {
        responseBody.append(line);
      }


      return responseBody.toString();
    } catch (IOException e) {
      throw new RuntimeException("API 응답을 읽는 데 실패했습니다.", e);
    }
  }
}
