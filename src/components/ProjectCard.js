import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, hashtags, url }) => {
  return (
    <Col size={12} sm={6} md={5}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="" />
        <div className="proj-txtx">
          <a style={{ textDecoration: "none", color: "#fff" }} href={url} target="_blank" rel="noreferrer"><h4>{title}</h4>
            <span>{description}</span>
            <br></br>
            <br></br>
            {hashtags?.map((tag) => <span>#{tag}&nbsp;</span>)}</a>
        </div>
      </div>
    </Col>
  )
}
