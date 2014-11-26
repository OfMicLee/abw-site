package com.allbuywine.site.mvc;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by MicLee on 14/11/20.
 */

@Controller
@RequestMapping("/angular")
public class AngularStudyController
{
    @RequestMapping("/hiworld")
    public String printHi() {
        return "hiworld";
    }

    @RequestMapping("/cart")
    public String cart() {
        return "cart";
    }

    @RequestMapping("/phone")
    public String getPhoneList() {
        return "phonelist";
    }

    @RequestMapping("/register")
    public String register() {
        return "register";
    }

}
