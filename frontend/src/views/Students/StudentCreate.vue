<script setup>
    import { reactive } from 'vue';
    import useStudents from '../../composables/students.js';

    const{ storeStudent, errors } = useStudents();

    const form = reactive({
        firstname: "",
        lastname: "",
        course: "",
        area: "",
        city: "",
        zip: ""
    });

</script>
<template>
    <div class="bg-white mt-10 w-1/2 mr-auto ml-auto flex justify-center h-full rounded">
        <form class="w-full max-w-lg pt-10 pb-10" @submit.prevent="storeStudent(form)">
        <h1 class="flex font-bold text-lg pb-10">Student Registration Form</h1>
            <div class="flex flex-wrap -mx-3 mb-6">
                 <div class="w-full md:w-1/2 px-3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                        First Name
                    </label>
                    <input v-if="errors.firstname" v-model="form.firstname" class="appearance-none block w-full bg-gray-100 text-gray-700 border border-red-600 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Student firstname">
                    <input v-else v-model="form.firstname" class="appearance-none block w-full bg-gray-100 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Student firstname">
                    <div v-if="errors.firstname">
                        <span class="text-red-600 font-semibold text-xs">{{ errors.firstname[0] }}</span>
                    </div>
                </div>
                <div class="w-full md:w-1/2 px-3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                        Last Name
                    </label>
                    <input v-if="errors.lastname" v-model="form.lastname" class="appearance-none block w-full bg-gray-100 text-gray-700 border border-red-600 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Student firstname">
                    <input v-else v-model="form.lastname" class="appearance-none block w-full bg-gray-100 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Student firstname">
                    <div v-if="errors.lastname">
                        <span class="text-red-600 font-semibold text-xs">{{ errors.lastname[0] }}</span>
                    </div>
                </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                    Course Taken
                </label>
                <input v-if="errors.course" v-model="form.course" class="appearance-none block w-full bg-gray-100 text-gray-700 border border-red-600 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" placeholder="Student course">
                <input v-else v-model="form.course" class="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" placeholder="Student course">
                <div v-if="errors.course">
                        <span class="text-red-600 font-semibold text-xs">{{ errors.course[0] }}</span>
                    </div>
                <p v-else class="text-gray-600 text-xs italic">Do not use initials</p>
                </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-2">
                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                    Area
                </label>
                <input v-if="errors.area" v-model="form.area" class="appearance-none block w-full bg-gray-100 text-gray-700 border border-red-600 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Buendia">
                <input v-else v-model="form.area" class="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Buendia">
                    <div v-if="errors.area">
                        <span class="text-red-600 font-semibold text-xs">{{ errors.area[0] }}</span>
                    </div>
                </div>
                 <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                    City
                </label>
                <input v-if="errors.city" v-model="form.city" class="appearance-none block w-full bg-gray-100 text-gray-700 border border-red-600 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Makati">
                <input v-else v-model="form.city" class="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Makati">
                    <div v-if="errors.city">
                        <span class="text-red-600 font-semibold text-xs">{{ errors.city[0] }}</span>
                    </div>
                </div>
                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
                    Zip
                </label>
                <input v-if="errors.zip" v-model="form.zip" class="appearance-none block w-full bg-gray-100 text-gray-700 border border-red-600 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="1200">
                <input v-else v-model="form.zip" class="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="1200">
                    <div v-if="errors.zip">
                        <span class="text-red-600 font-semibold text-xs">{{ errors.zip[0] }}</span>
                    </div>
                </div>
            </div>
            <div class="flex flex-wrap">
                <div class="w-full mt-10">
                    <button type="submit" class="w-full bg-green-700 pt-3 pb-3 text-white hover:bg-green-900 font-semibold rounded-md">Add Student</button>
                </div>
                <a href="https://facebook.com/aurieljames11 " class="flex text-sm text-green-600 hover:underline justify-center ml-auto mr-auto py-2">Any problem?  Contact Admin</a>
            </div>
        </form>
    </div>
</template>