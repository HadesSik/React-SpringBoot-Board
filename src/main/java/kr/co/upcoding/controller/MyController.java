package kr.co.upcoding.controller;
 
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import kr.co.upcoding.mapper.TestMapper;
import kr.co.upcoding.vo.TestVO;
 
@Controller
public class MyController {

 
    @GetMapping("/")
    public String page(Model model) {

        model.addAttribute("pageName", "main");
        return "page";
    }

    @PostMapping("/login")
    @ResponseBody
    public boolean familyInsert(@RequestBody BoardCategoryVO vo){
        int result = bcm.familyInsert(vo);
        if(result == 1){
            return true;
        } else {
            return false;
        }
    }
 
    @RequestMapping(value = "/testinsert", method=RequestMethod.POST)
    public String testInsert(TestVO vo) {
    	
    	return "sucsex";
    }
    
    @RequestMapping(value = "/testdelete", method=RequestMethod.POST)
    public String testDelete(TestVO vo) {
    	
    	return "asf";
    }
}