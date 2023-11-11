package com.example.demo;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.example.demo.service.FilesStorageService;

import jakarta.annotation.Resource;

@SpringBootApplication
public class FiledropApplication implements CommandLineRunner{
	
	@Resource
	FilesStorageService storageService;

	public static void main(String[] args) {
		SpringApplication.run(FiledropApplication.class, args);
	}
	
	@Override
	  public void run(String... arg) throws Exception {
	    storageService.init();
	  }

}
