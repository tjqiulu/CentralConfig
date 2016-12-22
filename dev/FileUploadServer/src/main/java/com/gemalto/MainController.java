/**
 * Copyright (c) 2016 GEMALTO. All Rights Reserved.
 *
 * This software is the confidential and proprietary information of GEMALTO.
 * 
 * -------------------------------------------------------------------------
 * GEMALTO MAKES NO REPRESENTATIONS OR WARRANTIES ABOUT THE SUITABILITY OF
 * THE SOFTWARE, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO
 * THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
 * PURPOSE OR NON-INFRINGEMENT. GEMALTO SHALL NOT BE LIABLE FOR ANY
 * DAMAGES SUFFERED BY LICENSEE AS A RESULT OF USING, MODIFYING OR
 * DISTRIBUTING THIS SOFTWARE OR ITS DERIVATIVES.
 *
 * THIS SOFTWARE IS NOT DESIGNED OR INTENDED FOR USE OR RESALE AS ON-LINE
 * CONTROL EQUIPMENT IN HAZARDOUS ENVIRONMENTS REQUIRING FAIL-SAFE
 * PERFORMANCE, SUCH AS IN THE OPERATION OF NUCLEAR FACILITIES, AIRCRAFT
 * NAVIGATION OR COMMUNICATION SYSTEMS, AIR TRAFFIC CONTROL, DIRECT LIFE
 * SUPPORT MACHINES, OR WEAPONS SYSTEMS, IN WHICH THE FAILURE OF THE
 * SOFTWARE COULD LEAD DIRECTLY TO DEATH, PERSONAL INJURY, OR SEVERE
 * PHYSICAL OR ENVIRONMENTAL DAMAGE ("HIGH RISK ACTIVITIES"). GEMALTO
 * SPECIFICALLY DISCLAIMS ANY EXPRESS OR IMPLIED WARRANTY OF FITNESS FOR
 * HIGH RISK ACTIVITIES.
 */

package com.gemalto;

import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.nio.file.Paths;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.context.config.annotation.RefreshScope;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

@Controller
@RefreshScope
public class MainController {

    @Autowired
    private Environment env;


    /**
     * Show the index page containing the form for uploading a file.
     */
    @RequestMapping ("/")
    public String index () {
        return "index.html";
    }


    /**
     * POST /uploadFile -> receive and locally save a file.
     * 
     * @param uploadfile The uploaded file as Multipart file parameter in the
     *            HTTP request. The RequestParam name must be the same of the attribute
     *            "name" in the input tag with type file.
     * 
     * @return An http OK status in case of success, an http 4xx status in case
     *         of errors.
     */
    @RequestMapping (value = "/uploadFile", method = RequestMethod.POST)
    @ResponseBody
    public ResponseEntity<?> uploadFile (@RequestParam ("uploadfile") MultipartFile uploadfile,@RequestParam ("folder") String folder) {

        try {
            // Get the filename and build the local file path
             String filename = uploadfile.getOriginalFilename ();

            // String filepath = env.getProperty ("gto.paths.uploadedFiles", "/var/uploads");
            String filepath = Paths.get(folder, filename).toString();

            // Save the file locally
            BufferedOutputStream stream = new BufferedOutputStream (new FileOutputStream (new File (filepath)));
            stream.write (uploadfile.getBytes ());
            stream.close ();
        } catch (Exception e) {
            System.out.println (e.getMessage ());
            return new ResponseEntity<> (HttpStatus.BAD_REQUEST);
        }

        return new ResponseEntity<> (HttpStatus.OK);
    } // method uploadFile

} // class MainController
