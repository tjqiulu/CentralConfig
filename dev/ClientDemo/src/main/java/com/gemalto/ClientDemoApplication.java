package com.gemalto;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.core.env.Environment;

@SpringBootApplication
public class ClientDemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(ClientDemoApplication.class, args);
	}
	
	@Autowired
    void setEnvironment(Environment env) {
        System.out.println("config form url: " + env.getProperty("config.form.url"));
    }
}
