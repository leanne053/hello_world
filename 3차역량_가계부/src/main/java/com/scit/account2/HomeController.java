package com.scit.account2;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.scit.account2.dao.AccountDAO;
import com.scit.account2.vo.Member;

/**
 * Handles requests for the application home page.
 */
@Controller
public class HomeController {
	@Autowired
	AccountDAO dao;
	
	@RequestMapping(value = "/", method=RequestMethod.GET)
	public String home() {
		return "home";
	}
	@RequestMapping(value = "/signup", method=RequestMethod.GET)
	public String signup() {
		return "signup";
	}
	@RequestMapping(value="/login", method=RequestMethod.GET)
	public String login(Member member,Model model) {
		String result=null;
		result=dao.selectMember(member);
		if(result!=null) {
			model.addAttribute("result",result);
		}else {
			model.addAttribute("warning","로그인정보가 맞지 않습니다.");
		}
		return "home";
	}
}
