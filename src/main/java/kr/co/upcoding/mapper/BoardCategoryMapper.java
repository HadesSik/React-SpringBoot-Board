package kr.co.upcoding.mapper;

import kr.co.upcoding.vo.BoardCategoryVO;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@Mapper
public interface BoardCategoryMapper {
    List<BoardCategoryVO> categoryList();
}
