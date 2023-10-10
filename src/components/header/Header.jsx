import { Articles } from "@/lib/redux/service/articles/get/getArticles";
import moment from "moment/moment";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function Header() {
  const dispatch = useDispatch();

  const checkUser = useSelector((state) => {
    return state.user?.data?.token;
  });

  console.log(checkUser);

  useEffect(() => {
    dispatch(
      Articles({
        headers: {
          Authorization: `Bearer ${checkUser}`,
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        },
      })
    );
  }, []);

  const GetArticlesData = useSelector((state) => {
    return state.articles.articles.data;
  });

  console.log(GetArticlesData);

  return (
    <div
      className="px-12 w-full md:absolute top-[80px]"
      style={{ height: "90vh" }}
    >
      <div className="relative">
        <div className="relative">
          <div className="absolute top-0 bottom-0 left-0 flex items-center px-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search for news..."
            className="pl-16 pr-4 py-4 rounded-md shadow-md bg-white border-0 w-full outline-none"
          />
        </div>

        <section class="text-gray-600 body-font">
          <div class="container px-5 py-5 mx-auto">
            <div class="flex flex-wrap -m-4">
              {GetArticlesData?.map((res) => {
                return (
                  <div className="p-4 md:w-1/3">
                    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                      <div className="w-full">
                        <div className="w-full flex p-2">
                          <div className="p-2 ">
                            <img
                              src="https://firebasestorage.googleapis.com/v0/b/thecaffeinecode.appspot.com/o/Tcc_img%2Flogo.png?alt=media&token=5e5738c4-8ffd-44f9-b47a-57d07e0b7939"
                              alt="author"
                              className="w-10 h-10 rounded-full overflow-hidden"
                            />
                          </div>
                          <div className="pl-2 pt-2 ">
                            <p className="font-bold">{`${res?.owner?.firstName} ${res?.owner?.lastName}`}</p>
                            <p className="text-xs">
                              {moment(res?.createdAt).format(`D MMM YY`)}
                            </p>
                          </div>
                        </div>
                      </div>

                      <img
                        className="lg:h-48 md:h-36 w-full object-cover object-center"
                        src={res?.attach?.[0]?.url}
                        alt="blog cover"
                      />

                      <div className="p-4">
                        <h2 className="tracking-widest text-xs title-font font-bold text-green-400 mb-1 uppercase ">
                          {res?.title}
                        </h2>
                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                          This is a blog template
                        </h1>
                        <div className="flex items-center flex-wrap ">
                          <a
                            href="/"
                            className="text-green-800  md:mb-2 lg:mb-0"
                          >
                            <p className="inline-flex items-center">
                              Read Blog
                              <svg
                                className="w-4 h-4 ml-2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                stroke-width="2"
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              >
                                <path d="M5 12h14"></path>
                                <path d="M12 5l7 7-7 7"></path>
                              </svg>
                            </p>
                          </a>
                          <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                            <svg
                              className="w-4 h-4 mr-1"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            >
                              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                            </svg>
                            24
                          </span>
                          <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                            <svg
                              className="w-4 h-4 mr-1"
                              stroke="currentColor"
                              stroke-width="2"
                              fill="none"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              viewBox="0 0 24 24"
                            >
                              <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                            </svg>
                            89
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Header;
