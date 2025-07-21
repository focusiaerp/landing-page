import React from "react";

const AnnouncementBanner = () => {
  return (
    <div>
      <div className="block lg:hidden">
        <section className="section announcement-section">
          <div className="announcement-island">
            <div className="marquee">
              <div
                className="marquee-group"
                style={{
                  transform:
                    "translate3d(-67.291%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                  transformStyle: "preserve-3d",
                  willChange: "transform",
                }}
              >
                <div className="flex gap-3 mr-3 announcement-item">
                  <div className="small-text">🎉</div>
                  <div className="small-text">
                    <span className="bold-text">Exciting news!</span> Artifact
                    v1 is now live and ready to{" "}
                    <a
                      href="https://mmra.re/purchaseartifact"
                      target="_blank"
                      className="underline-link"
                    >
                      purchase!
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="marquee-group"
                style={{
                  transform:
                    "translate3d(-67.291%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                  transformStyle: "preserve-3d",
                  willChange: "transform",
                }}
              >
                <div className="flex gap-3 mr-3 announcement-item">
                  <div className="small-text">🎉</div>
                  <div className="small-text">
                    <span className="bold-text">Exciting news!</span> Artifact
                    v1 is now live and ready to{" "}
                    <a
                      href="https://mmra.re/purchaseartifact"
                      target="_blank"
                      className="underline-link"
                    >
                      purchase!
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="marquee-group"
                style={{
                  transform:
                    "translate3d(-67.291%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                  transformStyle: "preserve-3d",
                  willChange: "transform",
                }}
              >
                <div className="flex gap-3 mr-3 announcement-item">
                  <div className="small-text">🎉</div>
                  <div className="small-text">
                    <span className="bold-text">Exciting news!</span> Artifact
                    v1 is now live and ready to{" "}
                    <a
                      href="https://mmra.re/purchaseartifact"
                      target="_blank"
                      className="underline-link"
                    >
                      purchase!
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="hidden lg:block">
        <section className="flex justify-center items-center pt-4">
          <div className="flex justify-center items-center w-auto px-3 py-2 bg-[#f6f4f1] rounded-4xl">
            <div className="flex gap-3 mr-3">
              <div className="text-sm">🎉</div>
              <div className="text-sm">
                <span className="font-medium">Aproveite!</span> Todos planos
                anuais com 3 meses grátis na primeira{" "}
                <a
                  href="https://mmra.re/purchaseartifact"
                  target="_blank"
                  className="underline"
                >
                  assinatura!
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AnnouncementBanner;
