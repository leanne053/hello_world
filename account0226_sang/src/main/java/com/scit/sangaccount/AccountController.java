package com.scit.sangaccount;

import java.util.ArrayList;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.scit.sangaccount.dao.AccountDAO;
import com.scit.sangaccount.vo.Account;
import com.scit.sangaccount.vo.Member;

@Controller
public class AccountController {

	@Autowired
	AccountDAO dao;
	
	@RequestMapping(value="/gosignup", method=RequestMethod.GET)
	public String gosignup() {
		return "signup";
	}
	@RequestMapping(value="/selectMember", method=RequestMethod.GET)
	public String selectMember(Member member, HttpSession session) {
	
		Member result=dao.selectMember(member);
		
		if(result==null){
			return "home";
		}else {
			session.setAttribute("loginId", result.getId());
		}
		
		return "account";
	}
	@RequestMapping(value="/insertMember", method=RequestMethod.POST)
	public String insertMember(Member member) {
	int result=dao.insertMember(member);
	
	if(result==0) {
		return"redirect:/gosignup";
		}
		return "redirect:/";
	}
	
	@RequestMapping(value="/insertAccount", method=RequestMethod.POST)
	public @ResponseBody int insertAccount(Account account,HttpSession session) {
		System.out.println("!!");
		String loginId=(String) session.getAttribute("loginId");
		account.setId(loginId);
		int result=dao.insertAccount(account);
		System.out.println(result);
		
		return result;
		
	}
	@RequestMapping(value="/selectAccount", method=RequestMethod.GET)
	public @ResponseBody ArrayList<Account> selectAccount(HttpSession session, Account account) {
		ArrayList<Account> result=null;
		String loginId=(String) session.getAttribute("loginId");
		result=dao.selectAccount(loginId);
		
		
		return result;
		
	}
}

