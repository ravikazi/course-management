package com.springbootapi.springbootapi.service;

//import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springbootapi.springbootapi.dao.CourseDao;
import com.springbootapi.springbootapi.entities.Course;

@Service
public class CourseServiceimpl implements CourseService {
	
//	List<Course> list;
	@Autowired
	private CourseDao courseDao;
	
	public CourseServiceimpl() {
//		list = new ArrayList<>();
//		list.add(new Course(145, "Java Core Course", "This is the core java Courses"));
//		list.add(new Course(150, "Advance Java Course", "This is the Advance java Courses"));
//		list.add(new Course(155, "Python", "This is the basic Python Courses"));
	}
	
	@Override
	public List<Course> getCourses() {
		// TODO Auto-generated method stub
//		return list;
		return courseDao.findAll();
	}

	@Override
	public Course getCourse(long courseId) {
//		Course c = null;
//		for(Course course:list) {
//			if(course.getId()==courseId) {
//				c = course;
//				break;
//			}
//		}
//		return c;
		return courseDao.getOne(courseId);
	}

	@Override
	public Course addCourse(Course course) {
//		list.add(course);
//		return course;
		
		courseDao.save(course);
		return course;
	}

	@Override
	public Course updateCourse(Course course) {
//		list.forEach(e ->{
//			if(e.getId()==course.getId()) {
//				e.setTitle(course.getTitle());
//				e.setDescription(course.getDescription());
//			}
//		});
		courseDao.save(course);
		return course;
	}

	@Override
	public Course deleteCourse(long courseId) {
//		list = this.list.stream().filter(e ->e.getId()!=courseId).collect(Collectors.toList());
//		return list;
		Course courseEntity = courseDao.getOne(courseId);
		courseDao.delete(courseEntity);
		return courseEntity;
	}
} 
