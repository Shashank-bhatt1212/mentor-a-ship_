package com.example.capstoneproject.mentor;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MentorJpaRepository extends JpaRepository<Mentor, String>{

}
