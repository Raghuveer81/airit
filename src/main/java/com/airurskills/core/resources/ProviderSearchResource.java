package com.airurskills.core.resources;

import com.airurskills.core.models.Provider;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by Mallikarjuna Vala on 6/8/16.
 */

@RestController
@RequestMapping(value="/air")
public class ProviderSearchResource {

    @RequestMapping(value = "/all",method = RequestMethod.GET,headers = "Accept=application/json")
    @ResponseBody
    public ResponseEntity<String> listJson() {
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Type", "application/json; charset=utf-8");
        try {
            ObjectMapper mapper = new ObjectMapper();
            Provider response = new Provider();
            response.setName("Mallik");
            return new ResponseEntity<String>(mapper.writeValueAsString(response), headers, HttpStatus.OK);
        }
        catch (Exception e) {
            return new ResponseEntity<String>("{\"ERROR\":\""+e.getMessage()+"\"}", headers, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
