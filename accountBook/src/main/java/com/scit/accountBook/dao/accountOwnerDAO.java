package com.scit.accountBook.dao;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.scit.accountBook.vo.AccountOwner;

@Repository
public class accountOwnerDAO {
	@Autowired
	SqlSession session;
	public int insertId(AccountOwner accountowner) {
		int result=0;
		accountOwnerMapper mapper=session.getMapper(accountOwnerMapper.class);
		try {
			result=mapper.insertId(accountowner);
		}catch(Exception e) {
			e.printStackTrace();
		}
		return result;
		
	}
	public String selectId(AccountOwner accountowner) {
		String result=null;
		accountOwnerMapper mapper=session.getMapper(accountOwnerMapper.class);
		try {
			System.out.println("dao : " + accountowner);
			result=mapper.selectId(accountowner);
			System.out.println("DAO : " + result);
		}catch(Exception e) {
			e.printStackTrace();
		}
		return result;
		
	}
}
