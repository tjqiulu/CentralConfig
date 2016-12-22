package com.gemalto;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient
public class FileUploadServerApplication {

	public static void main(String[] args) {
		SpringApplication.run(FileUploadServerApplication.class, args);
	}
}
