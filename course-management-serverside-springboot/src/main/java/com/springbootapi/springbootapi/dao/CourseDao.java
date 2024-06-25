package com.springbootapi.springbootapi.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.springbootapi.springbootapi.entities.Course;

public interface CourseDao extends JpaRepository<Course, Long> {

}
