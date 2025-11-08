package com.simplilearn.capstone_Project.models;
import java.util.List;

public class CartItem {
    private int medicineId;
    public int getMedicineId() {
		return medicineId;
	}
	public void setMedicineId(int medicineId) {
		this.medicineId = medicineId;
	}
	public int getQuantity() {
		return quantity;
	}
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	private int quantity;
    
}
