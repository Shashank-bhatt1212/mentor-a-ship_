package com.example.capstoneproject.assosiate;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CourseJpaRespository extends JpaRepository<Course, Long> {

}
