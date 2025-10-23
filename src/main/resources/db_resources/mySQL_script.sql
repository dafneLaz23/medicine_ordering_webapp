-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema healthcare_capstone
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema healthcare_capstone
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `healthcare_capstone` DEFAULT CHARACTER SET utf8 ;
USE `healthcare_capstone` ;

-- -----------------------------------------------------
-- Table `healthcare_capstone`.`Users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `healthcare_capstone`.`Users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `role` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `healthcare_capstone`.`Medicines`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `healthcare_capstone`.`Medicines` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `description` VARCHAR(45) NOT NULL,
  `price` DOUBLE NOT NULL,
  `category` VARCHAR(45) NOT NULL,
  `stock_quantity` VARCHAR(45) NOT NULL,
  `image_url` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `healthcare_capstone`.`Orders`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `healthcare_capstone`.`Orders` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `userID` INT NOT NULL,
  `total_amount` DOUBLE NOT NULL,
  `order_date` VARCHAR(45) NOT NULL,
  `status` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `healthcare_capstone`.`Order_Items`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `healthcare_capstone`.`Order_Items` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `order_id` INT NOT NULL,
  `medicine_id` INT NOT NULL,
  `quantity` INT NOT NULL,
  `price` DOUBLE NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `healthcare_capstone`.`Cart`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `healthcare_capstone`.`Cart` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `user_id` INT NOT NULL,
  `medicine_id` INT NOT NULL,
  `quantity` INT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
