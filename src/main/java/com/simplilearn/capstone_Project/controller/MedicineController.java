package com.simplilearn.capstone_Project.controller;

import com.simplilearn.capstone_Project.models.Medicine;
import com.simplilearn.capstone_Project.service.MedicineService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api/medicines")
@CrossOrigin(origins = "http://localhost:4200")
public class MedicineController {

    @Autowired
    private MedicineService medicineService;

    @PostMapping("/add")
    public ResponseEntity<Medicine> addMedicine(
            @RequestParam("name") String name,   
            @RequestParam("description") String description,
            @RequestParam("price") Double price,
            @RequestParam("stock_quantity") int stock_quantity) throws IOException{
   
	    	
	    	Medicine medicine = medicineService.addMedicine(name, description, price, stock_quantity);
			return ResponseEntity.ok(medicine);
    }
    		
    
           // @RequestParam(value = "image", required = false) MultipartFile imageFile) {
/**
        try {
            Medicine medicine = medicineService.addMedicine(name, description, price, stock_quantity);
            return ResponseEntity.ok(medicine);
        } catch (IOException e) {
            return ResponseEntity.internalServerError().build();
        }
    }
**/
    @GetMapping
    public ResponseEntity<List<Medicine>> getAllMedicines() {
        return ResponseEntity.ok(medicineService.getAllMedicines());
    }

    @PutMapping("/{id}")
    public ResponseEntity<Medicine> updateMedicine(
            @PathVariable int id,
            @RequestBody Medicine updatedMedicine) {

        Medicine medicine = medicineService.updateMedicine(id, updatedMedicine);
        if (medicine != null) {
            return ResponseEntity.ok(medicine);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteMedicine(@PathVariable int id) {
        boolean deleted = medicineService.deleteMedicine(id);
        if (deleted) {
            return ResponseEntity.ok("Medicine deleted successfully.");
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
