package com.scit.accountBook;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.scit.accountBook.dao.accountBookDAO;
import com.scit.accountBook.vo.AccountBook;

@Controller
public class accountBookController {

	@Autowired
	accountBookDAO dao;
	
	@RequestMapping(value="/writeAccount", method=RequestMethod.GET)
	public String writeAccount() {
		return "writeAccount";
	}
	
	@RequestMapping(value="/viewAccount", method=RequestMethod.GET)
	public String viewAccount(Model model) {
		ArrayList<AccountBook> bList=dao.booklist();
		model.addAttribute("bLst",bList);
		return "writeAccount";
	}
	
}
