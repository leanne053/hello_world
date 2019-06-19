package com.nexture.hairshop;

public class HairShopMain {

	public static void main(String[] args) {
		ServiceMenu menu1 = new Visitor(0, PriceTable.PERM, 0, PriceTable.SHAPOO, PriceTable.SCALPMASSAGE, "大森", 25);
		ServiceMenu menu2 = new Visitor(PriceTable.CUT, 0, PriceTable.COLOR, PriceTable.SHAPOO, 0, "中澤", 17);
		
		System.out.println(menu1.calculating());
		System.out.println(menu2.calculating());

	}

}
