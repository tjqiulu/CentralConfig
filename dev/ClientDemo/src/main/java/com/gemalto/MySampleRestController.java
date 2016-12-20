package com.gemalto;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.cloud.context.config.annotation.RefreshScope;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RefreshScope
public class MySampleRestController {
	@Value("${config.form.url}")
	private String url;
	@Value("${config.form.name}")
	private String name;
	
	@RequestMapping("/url")
	public String getUrl() {
		return "Current running env is "+name+",config url is "+ url;
	}
	
}
