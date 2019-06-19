package com.nexture.hairshop;

public class Visitor extends ServiceMenu {
	String name;
	int age;
	
	public Visitor(int cut, int perm, int color, int shampoo, int scalpmassage, String name, int age) {
		super(cut, perm, color, shampoo, scalpmassage);
		this.name = name;
		this.age = age;
	}

	@Override
	public String calculating() {
		int total=cut+perm+color+shampoo+scalpmassage;
		String result=null;
		if(age<=18) {
			result = (int)(total*0.9)+"円(割引適用)";
		}else {
			result = total +"円";
		}
		return name+"様の計算書　："+result;
	}

}
