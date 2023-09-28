<script setup>
    import useStudents from '../../composables/students.js';
    import { onMounted } from "vue";

    const { students, getStudents } = useStudents();
    onMounted(()=>getStudents());

</script>
<template>
<div class="mt-12">
    
<div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Student ID
                </th>
                <th scope="col" class="px-6 py-3">
                    Course
                </th>
                <th scope="col" class="px-6 py-3">
                    Fullname
                </th>
                 <th scope="col" class="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="student in students" :key="student.id" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {{ student.id }}
                </th>
                <td class="px-6 py-4">
                   {{ student.course }}
                </td>
                <td class="px-6 py-4">
                    {{ student.fullname }}
                </td>
                <td class="px-6 py-4">  
                    <button class="px-2 pt-2 pb-2 pr-6 pl-6 bg-yellow-600 hover:text-white rounded-md hover:bg-yellow-700 text-white font-semibold">Edit</button>
                    <button class="px-2 pt-2 pb-2 pr-6 pl-6 bg-red-600 hover:text-white rounded-md hover:bg-red-700 text-white font-semibold">Delete</button>
                </td>
            </tr>
        </tbody>
    </table>
</div>

</div>
</template>