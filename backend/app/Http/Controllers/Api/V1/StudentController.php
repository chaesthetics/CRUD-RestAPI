<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreStudentRequest;
use App\Http\Resources\V1\StudentCollection;
use App\Http\Resources\V1\StudentResource;
use Illuminate\Http\Request;
use App\Models\Student;

class StudentController extends Controller
{
    public function index(Student $student)
    {
        // return new StudentCollection(Student::paginate(1)); 
        // return StudentResource::collection(Student::paginate(1)); 
        return StudentResource::collection(Student::all());
    }

    public function store(StoreStudentRequest $request)
    {
        Student::create($request->validated());
        return response()->json("Student has been created");
    }

    public function update(StoreStudentRequest $request, Student $student)
    {
        $student->update($request->validated());
        return response()->json("Updated Successfully");
    }

    public function show(Student $student)
    {
        return new StudentResource($student);
    }

    public function destroy(Student $student)
    {
        $student->delete();
        return response()->json("Student has been deleted");
    }
}
