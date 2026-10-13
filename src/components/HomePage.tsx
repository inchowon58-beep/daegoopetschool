import { GALLERY, SITE } from "@/lib/site";

function img(n: string) {
  return `${SITE.imageCdn}/${n}.webp`;
}

export default function HomePage() {
  const year = new Date().getFullYear();

  return (
    <>
      <a className="skip-link" href="#main">
        본문 바로가기
      </a>

      <main id="main">
        <section className="hero" aria-label="대구애견미용학원 히어로">
          <img
            className="hero-media"
            src={img("09")}
            alt="대구애견미용학원 대구펫스쿨 더위 휴식 규칙"
            width={1600}
            height={1067}
            fetchPriority="high"
          />
          <div className="hero-veil" aria-hidden="true" />
          <div className="hero-content">
            <p className="hero-brand">
              {SITE.brandEn} · {SITE.brandKo}
            </p>
            <h1>대구애견미용학원</h1>
            <p className="hero-lead">
              분지 도시의 한낮은 테이블 위 개가 먼저 지칩니다.
              동성로 수업은 컷 기술보다 작업 시간과 그늘 휴식을
              규칙으로 고정한 뒤 가위를 넘깁니다.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#heat">
                더위 규칙 보기
              </a>
              <a className="btn btn-ghost" href="#local">
                수성구·달서구
              </a>
            </div>
          </div>
        </section>

        <section className="keyword-bar" aria-label="대구 검색어">
          <div className="container keyword-bar-inner">
            <span>#대구애견미용학원</span>
            <span>#대구펫스쿨</span>
            <span>#대구강아지미용학원</span>
            <span>#동성로애견미용</span>
            <span>#수성구애견미용학원</span>
            <span>#애견미용사자격증</span>
            <span>#애견미용학원비용</span>
          </div>
        </section>

        <section className="section" id="heat">
          <div className="container narrow">
            <p className="eyebrow">Rule</p>
            <h2>35도에 가까운 날, 작업은 20분 단위입니다</h2>
            <p>
              <strong>대구애견미용학원</strong>은 7–8월 시간표에
              작업 20분, 그늘과 물 5분을 박아 둡니다. 혀 색, 잇몸, 귀 안 열감을
              확인하지 않으면 다음 부위로 넘어가지 않습니다.
              이 규칙은 겨울에도 남습니다. 더위에만 안전한 손은
              선선한 날 속도전에 사고가 나기 쉽습니다.
            </p>
            <p>
              <strong>대구펫스쿨</strong> 강사는 시연을 길게 하지 않습니다.
              한 동작을 보여 주고 수강생 테이블로 바로 돌아갑니다.
              더운 도시에서 관람형 수업은 개가 기다리는 시간을 늘릴 뿐입니다.
            </p>
          </div>
        </section>

        <section className="section section-alt" id="curriculum">
          <div className="container">
            <div className="section-head left">
              <p className="eyebrow">Order</p>
              <h2>열이 오르기 전에 끝나는 부위부터</h2>
            </div>
            <div className="info-grid curriculum-grid">
              <article>
                <span className="step-num">1</span>
                <h3>컨디션 카드</h3>
                <p>호흡, 물 섭취, 마지막 산책 시각을 적습니다. 카드 없이 리드를 잡지 않습니다.</p>
              </article>
              <article>
                <span className="step-num">2</span>
                <h3>짧은 부위</h3>
                <p>발, 위생, 턱밑처럼 금방 끝나는 곳. 대구 한낮 예약의 현실적인 범위입니다.</p>
              </article>
              <article>
                <span className="step-num">3</span>
                <h3>몸통은 아침·저녁</h3>
                <p>등·배 클립은 서늘한 시간대 반에서만 길게 합니다.</p>
              </article>
              <article>
                <span className="step-num">4</span>
                <h3>마감은 실내</h3>
                <p>드라이어 열을 낮추고 브러시만으로 결을 정리하는 날이 있습니다.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section" id="local">
          <div className="container split">
            <div>
              <p className="eyebrow">Map</p>
              <h2>동성로에서 만나고, 구마다 과제가 다릅니다</h2>
              <p>
                상담은 <strong>반월당·중앙로</strong> 생활권입니다.
                수성구 범어·황금은 실내 견 비중이 높아 정전기와 건조 피부 과제가 붙고,
                달서구 상인·월성은 공원 산책 뒤 진드기 자리 확인이 과제입니다.
                동구·경산은 도시철도와 버스로 오시는 시간을 상담 표에 적습니다.
              </p>
              <p>
                <strong>대구강아지미용학원</strong>을 고를 때 집과의 거리만 보면
                여름 시간표를 놓칩니다. 가까운 곳보다, 서늘한 시간에
                몸통 작업을 넣을 수 있는 반인지를 먼저 보십시오.
              </p>
            </div>
            <figure className="media-frame">
              <img
                src={img("04")}
                alt="대구애견미용학원 짧은 부위 실습"
                loading="lazy"
                width={800}
                height={1000}
              />
            </figure>
          </div>
        </section>

        <section className="section section-alt" id="career">
          <div className="container narrow">
            <p className="eyebrow">After</p>
            <h2>대구 살롱은 여름 운영 방식을 면접에서 묻습니다</h2>
            <p>
              “더우면 어떻게 예약을 자르냐”가 단골 질문입니다.
              수강 후반에는 하루 예약표를 직접 짜 보게 합니다.
              소형 위생은 한낮, 장모 바디는 저녁으로 나누는 연습입니다.
              <strong>애견미용사자격증</strong> 체크는 그 표 옆에
              실기 항목만 작은 글씨로 붙입니다. 시험이 본업이 되지 않게 합니다.
            </p>
          </div>
        </section>

        <section className="section" id="price">
          <div className="container narrow">
            <p className="eyebrow">Pay</p>
            <h2>애견미용학원비용에 휴강 규칙을 같이 적습니다</h2>
            <p>
              폭염 경보가 이어지면 몸통 수업을 옮깁니다.
              <strong>애견미용학원비용</strong> 안내문 첫 줄은
              그 이동이 추가 수강료인지, 이미 포함된 보강인지입니다.
              대구펫스쿨은 여름 보강을 과정 안에 넣어 두고
              도구 구매는 별도 칸으로 뺍니다.
            </p>
            <div className="info-grid price-grid">
              <article>
                <h3>서늘반</h3>
                <p>아침·저녁. 몸통 클립이 들어갑니다.</p>
              </article>
              <article>
                <h3>한낮반</h3>
                <p>발·위생·얼굴 일부. 시간을 짧게 끊습니다.</p>
              </article>
              <article>
                <h3>예약표반</h3>
                <p>취업 앞둔 분. 하루 동선을 짜는 과제가 있습니다.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section section-alt" id="gallery">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">Notes</p>
              <h2>컨디션 카드와 함께 보는 사진</h2>
              <p>사진만 예쁘면 통과하지 않습니다. 카드의 호흡 기록이 먼저입니다.</p>
            </div>
            <div className="gallery-grid">
              {GALLERY.map((n) => (
                <figure key={n}>
                  <img
                    src={img(n)}
                    alt={`대구애견미용학원 수업 기록 ${n}`}
                    loading="lazy"
                    width={600}
                    height={750}
                  />
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-faq" id="faq">
          <div className="container narrow">
            <p className="eyebrow">FAQ</p>
            <h2>대구에서 꼭 확인하는 것</h2>
            <div className="faq-list">
              <details open>
                <summary>경산에서 동성로로 다녀도 되나요?</summary>
                <p>
                  가능합니다. 버스 시간을 상담 표에 적고, 폭염일 몸통 수업은
                  저녁 반으로 옮길 수 있는지 먼저 확인합니다.
                </p>
              </details>
              <details>
                <summary>여름에는 수업을 쉬나요?</summary>
                <p>
                  쉬지 않고 부위를 바꿉니다. 한낮에는 짧은 부위만 하고
                  몸통은 서늘한 시간으로 옮깁니다.
                </p>
              </details>
              <details>
                <summary>수성구 샵 취업을 생각하고 있습니다.</summary>
                <p>
                  실내견 건조와 정전기 과제를 늘립니다. 공원형 진드기 과제는 비중을 낮춥니다.
                </p>
              </details>
              <details>
                <summary>노령견만 키워 봐서 핸들링이 걱정입니다.</summary>
                <p>
                  컨디션 카드 훈련이 먼저라 오히려 맞습니다. 억지로 자세를 고정하는 시연은 하지 않습니다.
                </p>
              </details>
            </div>
          </div>
        </section>

        <section className="section section-contact" id="contact">
          <div className="container narrow contact-box">
            <p className="eyebrow">Dongseongno</p>
            <h2>반월당 생활권 예약</h2>
            <p>
              사는 구와 다닐 수 있는 시간대(아침·한낮·저녁)를 알려 주시면
              서늘반과 한낮반 중 어디인지 바로 말씀드립니다.
            </p>
            <p className="contact-brand">
              {SITE.brandKo} · {SITE.schoolName}
            </p>
            <p className="contact-address">{SITE.address}</p>
            <p className="contact-address-sub">{SITE.addressDetail}</p>
            <a className="btn btn-primary" href="#heat">
              더위 규칙으로
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <div>
            <p className="footer-brand-en">{SITE.brandEn}</p>
            <p className="footer-brand-ko">{SITE.brandKo}</p>
            <p className="footer-seo">{SITE.title}</p>
          </div>
          <div className="footer-meta">
            <p>{SITE.address}</p>
            <p>대구애견미용학원 · 대구펫스쿨 · 동성로애견미용</p>
            <p className="footer-managed">
              <img src="/kkf-logo.png" alt="" width={36} height={36} />
              <span>한국애견연맹 반려문화증진위원회에 의해 관리되는 페이지입니다.</span>
            </p>
            <p className="footer-copy">
              &copy; {year} {SITE.brandKo}. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
