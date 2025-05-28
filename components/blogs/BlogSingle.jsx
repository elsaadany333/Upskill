import React from "react";
import Image from "next/image";
import REview from "./Review";
import ReplayForm from "./ReplayForm";


export default function BlogSingle({ blogItem }) {
  return (
    <section className="tf-spacing tf-spacing-3">
      <div className="page-blog-single">
        <div className="image-head">
          <Image
            className="w-100 lazyload"
            data-src="/images/blog/blog-detail.jpg"
            alt=""
            src="/images/blog/blog-detail.jpg"
            width={2700}
            height={1050}
          />
        </div>
        <div className="blog-single-wrap">
          <div className="blog-single-content">
            <div className="meta wow fadeInUp">
              <div className="meta-item">
                <i className="flaticon-calendar" />
                <p>06 April 2024</p>
              </div>
              <div className="meta-item">
                <i className="flaticon-message" />
                <p>14</p>
              </div>
              <a href="#" className="meta-item">
                <i className="flaticon-user-1" />
                <p>Esther Howard</p>
              </a>
            </div>
            <h2 className="font-cardo fw-7 wow fadeInUp">{blogItem.title}</h2>
            <div className="title text-22 fw-5 wow fadeInUp">
              About This Course
            </div>
            <p className="fs-15">
              Lorem ipsum dolor sit amet consectur adipisicing elit, sed do
              eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim
              ad minim veniam, quis nostrud exerec tation ullamco laboris nis
              aliquip commodo consequat duis aute irure dolor in reprehenderit
              in voluptate velit esse cillum dolore eu fugiat nulla pariatur
              enim ipsam.
              <br />
              <br />
              Excepteur sint occaecat cupidatat non proident sunt in culpa qui
              officia deserunt mollit anim id est laborum. Sed ut perspiciatis
              unde omnis iste natus error sit voluptatem accusantium doloremque
              laudantium totam rem aperiam.
            </p>
            <div className="blockquote">
              <div className="desc fs-15">
                Aliquam hendrerit sollicitudin purus, quis rutrum mi accumsan
                nec. Quisque bibendum orci ac <br />
                nibh facilisis, at malesuada orci congue.
              </div>
              <div className="name">Luis Pickford</div>
            </div>
            <div className="title text-22 fw-5 wow fadeInUp">
              What you'll learn
            </div>
            <ul className="wrap-list-text-check">
              <li className="list-text-item flex items-center gap-10">
                <div className="icon">
                  <i className="flaticon-check" />
                </div>
                <div className="fs-15">
                  Prepare for Industry Certification Exam
                </div>
              </li>
              <li className="list-text-item flex items-center gap-10">
                <div className="icon">
                  <i className="flaticon-check" />
                </div>
                <div className="fs-15">
                  Earn Certification that is Proof of your Competence
                </div>
              </li>
              <li className="list-text-item flex items-center gap-10">
                <div className="icon">
                  <i className="flaticon-check" />
                </div>
                <div className="fs-15">
                  Hours and Hours of Video Instruction
                </div>
              </li>
              <li className="list-text-item flex items-center gap-10">
                <div className="icon">
                  <i className="flaticon-check" />
                </div>
                <div className="fs-15">
                  Dozens of Code Examples to Download and Study
                </div>
              </li>
              <li className="list-text-item flex items-center gap-10">
                <div className="icon">
                  <i className="flaticon-check" />
                </div>
                <div className="fs-15">Over 25 Engaging Lab Exercises</div>
              </li>
              <li className="list-text-item flex items-center gap-10">
                <div className="icon">
                  <i className="flaticon-check" />
                </div>
                <div className="fs-15">All Lab Solutions</div>
              </li>
              <li className="list-text-item flex items-center gap-10">
                <div className="icon">
                  <i className="flaticon-check" />
                </div>
                <div className="fs-15">
                  Instructor Available by Email or on the Forums
                </div>
              </li>
              <li className="list-text-item flex items-center gap-10">
                <div className="icon">
                  <i className="flaticon-check" />
                </div>
                <div className="fs-15">All Free Tools</div>
              </li>
              <li className="list-text-item flex items-center gap-10">
                <div className="icon">
                  <i className="flaticon-check" />
                </div>
                <div className="fs-15">
                  Comprehensive Coverage of HTML and CSS
                </div>
              </li>
              <li className="list-text-item flex items-center gap-10">
                <div className="icon">
                  <i className="flaticon-check" />
                </div>
                <div className="fs-15">
                  Client Side Programming with Javascript
                </div>
              </li>
              <li className="list-text-item flex items-center gap-10">
                <div className="icon">
                  <i className="flaticon-check" />
                </div>
                <div className="fs-15">Server Side Development with PHP</div>
              </li>
              <li className="list-text-item flex items-center gap-10">
                <div className="icon">
                  <i className="flaticon-check" />
                </div>
                <div className="fs-15">
                  Learn Database Development with mySQL
                </div>
              </li>
            </ul>
            <div className="image-wrap">
              <div className="image-item wow fadeInLeft">
                <Image
                  className="lazyload"
                  data-src="/images/blog/blog-12.jpg"
                  alt=""
                  src="/images/blog/blog-12.jpg"
                  width={901}
                  height={700}
                />
                <div>Donec purus posuere nullam lacus aliquam.</div>
              </div>
              <div className="image-item wow fadeInRight" data-wow-delay="0.1s">
                <Image
                  className="lazyload"
                  data-src="/images/blog/blog-07.jpg"
                  alt=""
                  src="/images/blog/blog-07.jpg"
                  width={1880}
                  height={1100}
                />
                <div>Donec purus posuere nullam lacus aliquam.</div>
              </div>
            </div>
            <div className="title text-22 fw-5 wow fadeInUp">Requirements</div>
            <ul className="wrap-list-text-dot">
              <li className="list-text-item fs-15">
                There are no skill course although it's helpful if you are
                familiar with operating your computer and using the internet.
              </li>
              <li className="list-text-item fs-15">
                You can take this course using a Mac, PC or LInux machine.
              </li>
              <li className="list-text-item fs-15">
                It is recommended that you download the free Komodo text editor.
              </li>
            </ul>
          </div>
          <div className="bottom flex items-center justify-between gap-20 flex-wrap">
            <div className="share flex items-center gap-20p">
              <h6 className="fw-5">Share this post</h6>
              <ul className="tf-social-icon flex items-center gap-10">
                <li>
                  <a href="#">
                    <i className="flaticon-facebook-1" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="icon-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="flaticon-instagram" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="flaticon-linkedin-1" />
                  </a>
                </li>
              </ul>
            </div>
            <ul className="tags-list">
              <li>
                <a href="#" className="tags-item">
                  Course
                </a>
              </li>
              <li>
                <a href="#" className="tags-item">
                  SEO
                </a>
              </li>
              <li>
                <a href="#" className="tags-item">
                  Designer
                </a>
              </li>
              <li>
                <a href="#" className="tags-item">
                  Software
                </a>
              </li>
            </ul>
          </div>
          <div className="profile-item">
            <div className="image">
              <Image
                alt=""
                src="/images/avatar/profile-1.png"
                width={281}
                height={280}
              />
            </div>
            <div className="content">
              <h5>
                <a className="fw-5">Theresa Edin</a>
              </h5>
              <div className="sub fs-15">Professional Web Developer</div>
              <div className="fs-15">
                Lorem ipsum dolor sit amet. Qui incidunt dolores non similique
                ducimus et debitis molestiae. Et autem quia eum reprehenderit
                voluptates est reprehenderit illo est enim perferendis est neque
                sunt.
              </div>
            </div>
          </div>
          <div className="post-control flex items-center justify-between gap-20 flex-wrap">
            <div className="prev wow fadeInLeft">
              <a href="#" className="flex items-center fw-5 h6">
                <i className="icon-arrow-left" />
                Previous Post
              </a>
              <div className="fs-15">
                Given Set was without from god divide rule Hath
              </div>
            </div>
            <div className="next wow fadeInRight">
              <a href="#" className="flex items-center justify-end fw-5 h6">
                Next Post
                <i className="icon-arrow-right" />
              </a>
              <div className="fs-15">
                Tree earth fowl given moveth deep lesser After
              </div>
            </div>
          </div>
          <REview />
          <ReplayForm />
        </div>
      </div>
    </section>
  );
}
