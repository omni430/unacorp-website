import { useEffect, useState } from 'react'
import { CalendarDays, ChevronDown, Megaphone } from 'lucide-react'

export type NewsItem = {
  id: string
  date: string
  category: string
  title: string
  summary: string
  content: string
  /** 뉴스 사진 이미지 URL (선택) */
  image?: string
  /** 동영상 URL — 유튜브 링크 또는 mp4 직링크 (선택) */
  video?: string
}

export const NEWS_STORAGE_KEY = 'una_news_v1'

// Netlify(Decap CMS)에서 관리하는 공식 뉴스 데이터
import newsJson from '../data/news.json'

const DEFAULT_NEWS: NewsItem[] = Array.isArray(newsJson)
  ? (newsJson as NewsItem[])
  : ((newsJson as { items?: NewsItem[] }).items ?? [])

export function loadNews(): NewsItem[] {
  try {
    const raw = localStorage.getItem(NEWS_STORAGE_KEY)
    if (raw) {
      const parsed = JSON.parse(raw)
      if (Array.isArray(parsed)) {
        return parsed as NewsItem[]
      }
    }
  } catch {
    // localStorage를 사용할 수 없으면 JSON 기본 뉴스 사용
  }
  return DEFAULT_NEWS
}

function formatDate(date: string): string {
  // YYYY-MM-DD → YYYY.MM.DD
  return (date || '').replace(/-/g, '.')
}

/** 유튜브 URL을 임베드용 URL로 변환. 유튜브가 아니면 null */
function youtubeEmbed(url: string): string | null {
  const m = url.match(/(?:youtube\.com\/(?:watch\?.*v=|embed\/|shorts\/)|youtu\.be\/)([\w-]{6,})/)
  return m ? `https://www.youtube.com/embed/${m[1]}` : null
}

function isMp4(url: string): boolean {
  return /\.(mp4|webm|ogg)(\?.*)?$/i.test(url)
}

export default function News() {
  const [news, setNews] = useState<NewsItem[]>(DEFAULT_NEWS)
  const [openId, setOpenId] = useState<string | null>(null)

  useEffect(() => {
    setNews(loadNews())
  }, [])

  const sorted = [...news].sort((a, b) => (a.date < b.date ? 1 : -1))

  return (
    <section id="news" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-[1100px] px-6">
        <div className="text-center">
          <p className="text-sm font-semibold tracking-widest text-[#6e6e73] uppercase">News</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#1d1d1f] md:text-6xl">
            유나코아퍼레이션 소식
          </h2>
        </div>

        <div className="mx-auto mt-14 flex max-w-3xl flex-col gap-3">
          {sorted.length === 0 && (
            <div className="rounded-3xl bg-[#f5f5f7] p-10 text-center text-[#6e6e73]">
              등록된 뉴스가 없습니다.
            </div>
          )}

          {sorted.map((item) => {
            const open = openId === item.id
            return (
              <article key={item.id} className="overflow-hidden rounded-3xl bg-[#f5f5f7]">
                <button
                  type="button"
                  onClick={() => setOpenId(open ? null : item.id)}
                  className="flex w-full items-start gap-4 p-6 text-left md:items-center md:gap-6 md:p-7"
                >
                  <div className="hidden w-24 shrink-0 flex-col items-start gap-1 sm:flex">
                    <span className="flex items-center gap-1 text-xs text-[#86868b]">
                      <CalendarDays size={12} />
                      {formatDate(item.date)}
                    </span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="inline-block rounded-full bg-white px-3 py-1 text-[11px] font-semibold tracking-wider text-[#0066cc]">
                      {item.category || '소식'}
                    </span>
                    <h3 className="mt-2 text-base font-semibold leading-snug text-[#1d1d1f] md:text-xl">
                      {item.title}
                    </h3>
                    <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-[#6e6e73]">
                      {item.summary}
                    </p>
                    <span className="mt-1.5 flex items-center gap-1 text-xs text-[#86868b] sm:hidden">
                      <CalendarDays size={11} />
                      {formatDate(item.date)}
                    </span>
                  </div>
                  <ChevronDown
                    size={20}
                    className={`mt-1 shrink-0 text-[#86868b] transition-transform duration-300 ${
                      open ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {open && (
                  <div className="border-t border-[#d2d2d7] px-6 py-6 md:px-7 md:pl-[8.5rem]">
                    {item.image && (
                      <img
                        src={item.image}
                        alt={item.title}
                        loading="lazy"
                        className="mb-5 w-full max-w-2xl rounded-2xl object-cover"
                      />
                    )}
                    {item.video &&
                      (youtubeEmbed(item.video) ? (
                        <div className="mb-5 aspect-video w-full max-w-2xl overflow-hidden rounded-2xl bg-black">
                          <iframe
                            src={youtubeEmbed(item.video)!}
                            title={item.title}
                            loading="lazy"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="h-full w-full"
                          />
                        </div>
                      ) : isMp4(item.video) ? (
                        <video
                          src={item.video}
                          controls
                          playsInline
                          className="mb-5 w-full max-w-2xl rounded-2xl bg-black"
                        />
                      ) : null)}
                    <p className="whitespace-pre-line text-sm leading-loose text-[#424245] md:text-base">
                      {item.content || item.summary}
                    </p>
                  </div>
                )}
              </article>
            )
          })}
        </div>

        <p className="mt-8 text-center">
          <a
            href="news-admin.html"
            className="inline-flex items-center gap-1.5 text-xs text-[#86868b] transition-colors hover:text-[#1d1d1f]"
          >
            <Megaphone size={12} />
            관리자 뉴스 등록
          </a>
        </p>
      </div>
    </section>
  )
}
