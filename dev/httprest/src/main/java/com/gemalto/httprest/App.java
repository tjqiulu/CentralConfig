package com.gemalto.httprest;

import java.io.IOException;

import org.apache.commons.lang3.StringUtils;
import org.apache.http.HttpEntity;
import org.apache.http.HttpResponse;
import org.apache.http.ParseException;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.DefaultHttpClient;
import org.apache.http.util.EntityUtils;


/**
 * Hello world!
 *
 */
public class App 
{
    
    private DefaultHttpClient client;

    private DefaultHttpClient getHttpClient(){
        if(client == null){
            client = new DefaultHttpClient();
        }
        return client;
    }


    public String post(String url,String applicationName){

        DefaultHttpClient client = getHttpClient();

        HttpPost post = new HttpPost(url);

        try {
            HttpEntity entity = new StringEntity(applicationName);
        } catch (Exception e) {
            e.printStackTrace();
        }



        HttpResponse response = null;
        try {
            response = client.execute(post);
        } catch (IOException e) {
            e.printStackTrace();
        }

        if(response ==null || response.getEntity() == null){
            return "";
        }

        String body = parseResponse(response);

        if(StringUtils.isEmpty(body)){
            return "";
        }


        return body;
    }
    
    private final String parseResponse(HttpResponse response){

        if(response == null){
            return "";
        }

        HttpEntity entity = response.getEntity();

        String body = null;
        try {
            body = EntityUtils.toString(entity);
        } catch (ParseException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }

        return body;
    }
    
}
