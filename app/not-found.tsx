import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col justify-center px-6 py-20">
      <p className="text-sm font-semibold uppercase text-forest">404</p>
      <h1 className="mt-4 text-3xl font-semibold text-ink">页面未找到</h1>
      <p className="mt-4 text-muted">你访问的页面不存在，或地址已经变更。</p>
      <Link
        href="/"
        className="mt-8 inline-flex w-fit rounded-md border border-forest px-4 py-2 text-sm font-medium text-forest transition hover:bg-forest hover:text-white"
      >
        返回首页
      </Link>
    </main>
  );
}
