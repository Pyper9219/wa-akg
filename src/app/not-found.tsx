export default function NotFound() {
  return (
    <div className="flex-1 flex items-center justify-center p-4 min-h-[80vh]">
      <div className="w-full max-w-lg bg-background dark:bg-background/20 backdrop-blur-3xl border border-primary/20 shadow-2xl rounded-3xl p-8 sm:p-12 flex flex-col items-center">
        <h1 className="text-7xl font-black tracking-tight text-primary font-mono mb-3">404</h1>
        <h2 className="text-xl font-bold text-foreground mb-4">Halaman Tidak Ditemukan</h2>
        <p className="text-sm text-muted-foreground leading-relaxed max-w-sm mx-auto">
          Maaf, halaman yang Anda cari mungkin telah dihapus, dipindahkan, atau memang tidak pernah ada.
        </p>
        <div className="relative w-full flex flex-col sm:flex-row gap-4 mt-8">
          <a href="/" className="w-full flex-1 flex items-center justify-center gap-2 h-12 border-primary/20 hover:bg-primary/10 text-primary hover:text-primary rounded-xl transition-all shadow-sm">
            <span>Kembali ke Beranda</span>
          </a>
        </div>
      </div>
    </div>
  );
}
