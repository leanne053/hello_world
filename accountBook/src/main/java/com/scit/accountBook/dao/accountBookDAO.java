package com.scit.accountBook.dao;

import java.util.ArrayList;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.scit.accountBook.vo.AccountBook;

@Repository
public class accountBookDAO {
	@Autowired
	SqlSession session;
	
	public int insertAccountBook(AccountBook accountbook) {
		int result=0;
		
		accountBookMapper mapper=session.getMapper(accountBookMapper.class);
		try {
			result=mapper.insertAccountBook(accountbook);
		}catch(Exception e) {
			e.printStackTrace();
		}
		return result;
	}
	public ArrayList<AccountBook> booklist(){
		ArrayList<AccountBook> result=null;
		
		accountBookMapper mapper=session.getMapper(accountBookMapper.class);
		try {
			result=mapper.booklist();
		}catch(Exception e) {
			e.printStackTrace();
		}
		return result;
	}
}
