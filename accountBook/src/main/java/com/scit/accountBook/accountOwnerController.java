package com.scit.accountBook;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.scit.accountBook.dao.accountOwnerDAO;
import com.scit.accountBook.vo.AccountOwner;

@Controller
public class accountOwnerController {

	@Autowired
	accountOwnerDAO dao;
	
	@RequestMapping(value="/checkId", method=RequestMethod.POST)
	public String checkId(AccountOwner accountowner, HttpSession session, Model model) {
		 System.out.println(accountowner);
		String check=dao.selectId(accountowner);
		System.out.println(check+"2");
		if(check==null) {
		model.addAttribute("warning","로그인 정보가 맞지 않습니다.");
		}else {
			model.addAttribute("check", check);
			System.out.println(check+"3");
		}
		return "home";
	}
	
	@RequestMapping(value="/registerId", method=RequestMethod.GET)
	public String registerId() {
		return "register";
	}
	
	@RequestMapping(value="/insertId", method=RequestMethod.POST)
	public String insertId(AccountOwner accountowner) {
		dao.insertId(accountowner);
		return "home";
	}
	
}
