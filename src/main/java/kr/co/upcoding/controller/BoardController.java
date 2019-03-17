package kr.co.upcoding.controller;

import kr.co.upcoding.mapper.BoardCategoryMapper;
import kr.co.upcoding.vo.BoardCategoryVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("/board")
@RestController

public class BoardController {
    @Autowired
    BoardCategoryMapper bcm;

    @PostMapping("/getlist")
    public List<BoardCategoryVO> boardCategoryList(){
        List<BoardCategoryVO> boardCategoryList = bcm.categoryList();

        return boardCategoryList;
    }

//    @RequestMapping(value = "/insert", method = RequestMethod.POST)
//    @ResponseBody
//    public boolean familyInsert(@RequestBody BoardCategoryVO vo){
//        int result = bcm.familyInsert(vo);
//        if(result == 1){
//            return true;
//        } else {
//            return false;
//        }
//    }
}
