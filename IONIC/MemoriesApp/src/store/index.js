import { createStore } from "vuex";

const store = createStore({
  state() {
    // Load memories from localStorage, or use default values if none exist
    const storedMemories = localStorage.getItem("memories");
    return {
      memories: storedMemories
        ? JSON.parse(storedMemories)
        : [
            {
              id: "m1",
              image:
                "https://ik.imagekit.io/tvlk/blog/2020/09/%E0%B9%80%E0%B8%AA%E0%B8%A1%E0%B9%87%E0%B8%94%E0%B8%99%E0%B8%B2%E0%B8%87%E0%B8%8A%E0%B8%B5-1.jpg?tr=dpr-2,w-675",
              title: "การท่องเที่ยว",
              description: "ต้องไปให้ได้",
            },
            {
              id: "m2",
              image:
                "https://s.isanook.com/ca/0/rp/r/w728/ya0xa0m1w0/aHR0cHM6Ly9zLmlzYW5vb2suY29tL2NhLzAvdWQvMjgyLzE0MTI2OTEvMDEuanBn.jpg",
              title: "มือถือ",
              description: "มันขาดไม่ได้เลยนะ",
            },
            {
              id: "m3",
              image:
                "https://health.campus-star.com/app/uploads/2018/10/sleep-01.jpg",
              title: "การนอน",
              description: "การเข้านอนในช่วงหัวค่ำ",
            },
            {
              id: "m4",
              image:
                "https://tse1.mm.bing.net/th/id/OIP.moOAC0btAnqPGstBXpTLaAHaE9?rs=1&pid=ImgDetMain&o=7&rm=3",
              title: "การใช้จ่ายเงิน",
              description: "การใช้จ่ายแบบประหยัด",
            },
          ],
    }; // Default memories if localStorage is empty
  },
  mutations: {
    addMemory(state, memoryData) {
      const newMemory = {
        id: new Date().toISOString(),
        title: memoryData.title,
        image: memoryData.imageUrl || memoryData.image, // ← รองรับทั้ง 2 แบบ
        description: memoryData.description,
      };

      state.memories.unshift(newMemory);
      localStorage.setItem("memories", JSON.stringify(state.memories));
    },
  },
  actions: {
    addMemory(context, memoryData) {
      context.commit("addMemory", memoryData);
    },
  },
  getters: {
    memories(state) {
      return state.memories;
    },
    memoryById(state) {
      return (memoryId) => {
        return state.memories.find((memory) => memory.id === memoryId);
      };
    },
  },
});

export default store;
