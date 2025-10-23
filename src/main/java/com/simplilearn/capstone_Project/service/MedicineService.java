package com.simplilearn.capstone_Project.service;

import com.simplilearn.capstone_Project.models.Medicine;
import com.simplilearn.capstone_Project.repository.MedicineRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.nio.file.*;
import java.util.List;

@Service
public class MedicineService {

    @Autowired
    private MedicineRepository medicineRepository;

    private static final String UPLOAD_DIR = "src/main/resources/static/images/";


    public Medicine addMedicine(String name,
                                Double price,
                                String description,
                                MultipartFile imageFile) throws IOException {

        String fileName = imageFile.getOriginalFilename();
        Path filePath = Paths.get(UPLOAD_DIR + fileName);
        Files.write(filePath, imageFile.getBytes());

        Medicine med = new Medicine();
        med.setName(name);
        med.setPrice(price);
        med.setDescription(description);
        med.setImage_url("/images/" + fileName);

        return medicineRepository.save(med);
    }

    public List<Medicine> getAllMedicines() {
        return medicineRepository.findAll();
    }
    
    public boolean deleteMedicine(int id) {
        if (medicineRepository.existsById(id)) {
            medicineRepository.deleteById(id);
            return true;
        }
        return false;
    }

    public Medicine updateMedicine(int id, Medicine medicine) {
        medicine.setId(id);
        return medicineRepository.save(medicine);
    }
}