import React, { useState } from "react";
import "./style.css";
import avatar from "../../assets/images/avatar-1.png";

function TeamMembers({ team }) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  return (
    <main className="mx-2 my-4 min-w-96 transition-all duration-500">
      <aside className="sidebar team p-7 rounded-3xl" data-sidebar>
        <div
          className="sidebar-info fustify-center"
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            gap: "15px",
          }}
        >
          <figure
            className="avatar-box"
            style={{
              borderRadius: "20px",
            }}
          >
            <img src={avatar} alt="Richard hanrick" />
          </figure>

          <div className="info-content">
            <h1
              className="name text-xl title font-semibold"
              title="Richard hanrick"
              style={{
                marginBottom: "10px",
              }}
            >
              {team.name}
            </h1>

            <p
              className="font-semibold role"
              style={{
                width: "max-content",
                padding: "3px 12px",
                borderRadius: "8px",
              }}
            >
              {team.role}
            </p>
          </div>

          <button
            className="info_more-btn flex gap-x-2 items-center"
            data-sidebar-btn
            onClick={toggleSidebar}
          >
            <span>Show Contacts</span>
            <ion-icon name="chevron-down"></ion-icon>
          </button>
        </div>

        <div
          className={`sidebar-info_more ${
            isSidebarOpen && "sidebar-info-more-open"
          } overflow-y-auto transition-all duration-500`}
        >
          <div className="separator"></div>

          <ul
            className="contacts-list"
            style={{ display: "grid", gridTemplateColumns: "1fr", gap: "14px" }}
          >
            <li
              className="contact-item"
              style={{
                minWidth: "100%",
                display: "flex",
                alignItems: "center",
                gap: "16px",
              }}
            >
              <div className="icon-box">
                <ion-icon name="mail-outline"></ion-icon>
              </div>

              <div
                className="contact-info"
                style={{
                  maxWidth: "calc(100% - 46px)",
                  width: "calc(100% - 46px)",
                }}
              >
                <p
                  className="contact-title text-xs text"
                  style={{
                    textTransform: "uppercase",
                    marginBottom: "2px",
                  }}
                >
                  Email
                </p>

                <a
                  href="mailto:richard@example.com"
                  className="contact-link text text-lg"
                >
                  {team.email}
                </a>
              </div>
            </li>

            <li
              className="contact-item"
              style={{
                minWidth: "100%",
                display: "flex",
                alignItems: "center",
                gap: "16px",
              }}
            >
              <div className="icon-box">
                <ion-icon name="phone-portrait-outline"></ion-icon>
              </div>

              <div className="contact-info">
                <p className="contact-title text text-xs uppercase">
                  Phone
                </p>

                <a
                  href="tel:+996990200225"
                  className="contact-link text text-lg"
                >
                  {team.phone}
                </a>
              </div>
            </li>

            {/* <li className="contact-item">
              <div className="icon-box">
                <ion-icon name="calendar-outline"></ion-icon>
              </div>

              <div className="contact-info">
                <p className="contact-title">Birthday</p>
                <time dateTime="1982-06-23">June 23, 1982</time>
              </div>
            </li> */}

            <li
              className="contact-item"
              style={{
                minWidth: "100%",
                display: "flex",
                alignItems: "center",
                gap: "16px",
              }}
            >
              <div className="icon-box">
                <ion-icon name="location-outline"></ion-icon>
              </div>

              <div className="contact-info">
                <p className="contact-title text-xs text">Location</p>
                <address className="text text-lg">
                  {team.city},{team.country}
                </address>
              </div>
            </li>
          </ul>

          <div className="separator"></div>

          <ul className="social-list flex gap-x-3">
            <li className="social-item">
              <a
                href={team.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <ion-icon name="logo-facebook"></ion-icon>
              </a>
            </li>
            <li className="social-item">
              <a
                href={team.vk}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <ion-icon name="logo-vk"></ion-icon>
              </a>
            </li>
            <li className="social-item">
              <a
                href={team.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <ion-icon name="logo-instagram"></ion-icon>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </main>
  );
}

export default TeamMembers;
