<template>
  <PublicLayout>
    <section>
        <Banner />
    </section>
    
  <section class="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight uppercase mb-2">
          Administrative Service
        </h2>
        <p class="text-gad-primary font-bold tracking-widest text-sm md:text-base">
          SEX-DISAGGREGATED DATA BY DIVISION
        </p>
        <p class="mt-4 text-gray-600 max-w-2xl mx-auto">
          A transparent overview of our workforce distribution, highlighting our commitment to gender equality and inclusive representation across all administrative sectors.
        </p>
        
        <div class="flex justify-center gap-4 mt-6">
          <div class="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-bold text-sm border border-blue-200">
            Total Male: 166
          </div>
          <div class="bg-pink-100 text-pink-800 px-4 py-2 rounded-full font-bold text-sm border border-pink-200">
            Total Female: 82
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        <div 
          v-for="(division, index) in divisionData" 
          :key="index"
          class="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 p-6 flex flex-col"
        >
          <div class="mb-6 flex-grow">
            <h3 class="text-xl font-bold text-gray-800 leading-tight mb-1">{{ division.name }}</h3>
            <p class="text-sm text-gray-500 font-medium">Total Personnel: {{ division.total }}</p>
          </div>

          <div class="space-y-4">
            
            <div>
              <div class="flex justify-between text-sm mb-1">
                <span class="font-semibold text-pink-600 flex items-center gap-1">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                  Female
                </span>
                <span class="font-bold text-gray-700">
                  {{ division.female }} 
                  <span class="text-gray-400 font-normal text-xs">({{ calculatePercentage(division.female, division.total) }}%)</span>
                </span>
              </div>
              <div class="w-full bg-pink-100 rounded-full h-2">
                <div class="bg-pink-500 h-2 rounded-full transition-all duration-1000 ease-out" :style="{ width: calculatePercentage(division.female, division.total) + '%' }"></div>
              </div>
            </div>

            <div>
              <div class="flex justify-between text-sm mb-1">
                <span class="font-semibold text-blue-600 flex items-center gap-1">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                  Male
                </span>
                <span class="font-bold text-gray-700">
                  {{ division.male }} 
                  <span class="text-gray-400 font-normal text-xs">({{ calculatePercentage(division.male, division.total) }}%)</span>
                </span>
              </div>
              <div class="w-full bg-blue-100 rounded-full h-2">
                <div class="bg-blue-500 h-2 rounded-full transition-all duration-1000 ease-out" :style="{ width: calculatePercentage(division.male, division.total) + '%' }"></div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  </section>

    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 class="text-3xl font-bold text-gray-900 mb-4">Our Commitment to Inclusivity</h2>
          <p class="text-gray-600 mb-6 leading-relaxed">
            We recognize that sustainable development cannot be achieved without the full and equal participation of all genders. Our initiatives aim to integrate gender perspectives into all policies, programs, and projects.
          </p>
          <ul class="space-y-3 text-gray-600">
            <li class="flex items-center gap-3">
              <span class="text-green-500 font-bold">✓</span> Promoting Women's Economic Empowerment
            </li>
            <li class="flex items-center gap-3">
              <span class="text-green-500 font-bold">✓</span> Eradicating Gender-Based Violence
            </li>
            <li class="flex items-center gap-3">
              <span class="text-green-500 font-bold">✓</span> Mainstreaming Gender Responsive Planning
            </li>
          </ul>
        </div>
        <div class="bg-purple-100 h-80 rounded-2xl flex flex-col items-center justify-center text-purple-500 overflow-hidden relative shadow-inner">
          <svg class="w-16 h-16 mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
          <span class="font-medium text-sm">[Illustration of a Diverse Community]</span>
        </div>
      </div>
    </section>

    <section class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-center text-gray-900 mb-12">Our Core Pillars</h2>
        
        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition border border-gray-100 group">
            <div class="w-12 h-12 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mb-6 group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Policy & Advocacy</h3>
            <p class="text-gray-600 text-sm leading-relaxed">
              Advocating for legislative changes and institutional policies that protect and promote the rights of marginalized genders.
            </p>
          </div>

          <div class="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition border border-gray-100 group">
            <div class="w-12 h-12 bg-pink-100 text-pink-600 rounded-lg flex items-center justify-center mb-6 group-hover:bg-pink-600 group-hover:text-white transition-colors duration-300">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Capacity Building</h3>
            <p class="text-gray-600 text-sm leading-relaxed">
              Conducting gender sensitivity training, livelihood workshops, and leadership seminars to foster independence and awareness.
            </p>
          </div>

          <div class="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition border border-gray-100 group">
            <div class="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Support Services</h3>
            <p class="text-gray-600 text-sm leading-relaxed">
              Providing safe spaces, counseling, legal assistance, and health resources for individuals facing discrimination or abuse.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-purple-700 py-16 px-4 sm:px-6 lg:px-8 text-center text-white">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-3xl font-bold mb-4">Ready to make a difference?</h2>
        <p class="text-purple-100 mb-8 text-lg">Join our community of advocates and volunteers today. Your voice matters in the fight for equality.</p>
        <button class="bg-white text-purple-700 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition shadow-lg">
          Become a Volunteer
        </button>
      </div>
    </section>

  </PublicLayout>
</template>

<script setup>
import { ref } from 'vue';
import Banner from '../../components/Banner.vue';
import PublicLayout from '../../layouts/PublicLayout.vue'

const divisionData = ref([
  {
    name: 'AS-OD',
    male: 4,
    female: 6,
    total: 10
  },
  {
    name: 'GSD',
    male: 80,
    female: 20,
    total: 100
  },
  {
    name: 'PSAMD',
    male: 19,
    female: 9,
    total: 28
  },
  {
    name: 'BGMD',
    male: 22,
    female: 3,
    total: 25
  },
  {
    name: 'RAMD',
    male: 11,
    female: 11,
    total: 22
  },
  {
    name: 'PMD',
    male: 30,
    female: 33, // Calculated from 82 Total - 49 (Sum of other divisions)
    total: 63
  }
]);

// 2. Helper function to calculate percentages dynamically for the progress bars
const calculatePercentage = (value, total) => {
  if (total === 0) return 0;
  return Math.round((value / total) * 100);
};
</script>