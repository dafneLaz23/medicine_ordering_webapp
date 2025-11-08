package com.simplilearn.capstone_Project.models;


public class OrderItemRequest {
    private int medicineId;
	private int quantity;
	
    public OrderItemRequest() {}
    
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

    
    
}
