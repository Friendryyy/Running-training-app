export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 to-slate-900 text-slate-200 flex flex-col items-center justify-center p-8">
      <div className="text-center max-w-2xl">
        <h1 className="text-6xl md:text-7xl font-extrabold text-lime-400 mb-6 tracking-tight">
          RunForge AI
        </h1>
        <p className="text-2xl md:text-3xl font-medium mb-8">
          AI Coach สำหรับนักวิ่ง ตามทฤษฎี Jack Daniels + VDOT
        </p>
        <p className="text-lg text-slate-400 mb-10">
          Deploy สำเร็จแล้ว! เว็บนี้จะช่วยวางแผนซ้อมวิ่ง + เวทเทรนนิ่งให้ตรงเป้าหมายของคุณ
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button className="bg-lime-400 hover:bg-lime-300 text-slate-950 font-bold py-5 px-10 rounded-3xl text-xl transition transform hover:scale-105 shadow-lg shadow-lime-500/30">
            เริ่มตั้งโปรไฟล์
          </button>
          <button className="border-2 border-lime-400 hover:bg-lime-400/10 text-lime-400 font-bold py-5 px-10 rounded-3xl text-xl transition">
            ดูแผนตัวอย่าง
          </button>
        </div>
      </div>
    </main>
  );
}
