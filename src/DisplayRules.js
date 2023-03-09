export default function DisplayRules(props) {
  if (props.show === "true" && props.event === "codefest")
    return (
      <>
        <div className="Rules">
          <p className="extra-content">
            <h2>Rules for the Event:</h2> <h3>Round 1: Guess the output</h3>{" "}
            <b>1.1</b> Each question will have a timer and it should be answered
            within the time span. <br /> <b>1.2</b> Will be conducted via
            Kahoot. <br /> <b>1.3</b> Top 10 - 20 will be selected for the next
            round Competitive.
            <h3>Round 2: Competitive Coding</h3> <b>2.1</b> Will be conducted in
            hackerrank
            <br /> <b>2.2</b> Participants are required to find the solution to
            the given coding problem
            <br />
            <br />{" "}
            <b>
              {" "}
              Participants are NOT allowed to browse the internet. If found, the
              participant will be DISQUALIFIED.
            </b>{" "}
            <br />
            <br />
            <h3>Requirements from Students:</h3> Laptop is mandatory
            Participants MUST have a Hackerrank account for competing. We will
            inform you earlier about any further details / changes about the
            event.
          </p>
          <div className="RulesButton">
            <button>REGISTER</button>
          </div>
        </div>
      </>
    );
  if (props.show === "true" && props.event === "innovat-o-thon")
    return (
      <>
        <div className="Rules">
          <p className="extra-content">
            <h2>Rules for the Event:</h2>
            <b>1.</b> Product should be working in realtime during the
            walkthrough.
            <br />
            <b>2.</b> Source Code should be made publicly available in a
            repository.
            <br />
            <b>3.</b> PPT about that product should be presented.
            <br />
            <b>4.</b> Judging will be based on innovation and how well the
            product serves a business.
            <br />
            <br />
            <h2>Requirements from Students:</h2>
            <b>1.</b> Laptop
            <br />
            <b>2.</b> Any hardware prototype (OPTIONAL)
          </p>
          <div className="RulesButton">
            <button>REGISTER</button>
          </div>
        </div>
      </>
    );
  if (props.show === "true" && props.event === "cssbattle")
    return (
      <>
        <div className="Rules">
          <p className="extra-content">
            <h2>Rules for the Event:</h2>
            <b>1.</b> Individual participation.
            <br />
            <b>2.</b> Should use only CSS. No software products.
            <br />
            <b>3.</b> Internet will not be provided.
            <br />
            <br />
            <h2>Requirements from Students:</h2>
            <b>1.</b> Laptop is mandatory.
          </p>
          <div className="RulesButton">
            <button>REGISTER</button>
          </div>
        </div>
      </>
    );
  if (props.show === "true" && props.event === "uidesign")
    return (
      <>
        <div className="Rules">
          <p className="extra-content">
            <h2>Rules for the Event:</h2>
            <b>1.</b> Team size: 2 participants only.
            <br />
            <b>2.</b> Time limit: 45 mins.
            <br />
            <b>3.</b> Any designing tool can be used.
            <br />
            <b>4.</b> Judging will be based on how user-interactive and
            appealing the designs are.
            <br />
            <br />
            <h2>Requirements from Students:</h2>
            <b>1.</b> Participants are requested to get their own laptops.
          </p>
          <div className="RulesButton">
            <button>REGISTER</button>
          </div>
        </div>
      </>
    );
  if (props.show === "true" && props.event === "blindrepresentation")
    return (
      <>
        <div className="Rules">
          <p className="extra-content">
            <h2>Rules for the Event:</h2>
            <b>1.</b> Maximum 2 members in a team.
            <br />
            <b>2.</b> Maximum number of Slides should be 30.
            <br />
            <b>3.</b> Ppt should be innovative and formal.
            <br />
            <b>4.</b> Teams should include new features in their presentation.
            <br />
            <br />
            <h2>Requirements from Students:</h2>
            <b>1.</b> Laptop is mandatory.
          </p>
          <div className="RulesButton">
            <button>REGISTER</button>
          </div>
        </div>
      </>
    );
  if (props.show === "true" && props.event === "brainbusters")
    return (
      <>
        <div className="Rules">
          <p className="extra-content">
            <h2>Rules for the Event:</h2>
            <b>1.</b> Maximum 2 members in a team.
            <br />
            <b>2.</b> Maximum number of Slides should be 30.
            <br />
            <b>3.</b> Ppt should be innovative and formal.
            <br />
            <b>4.</b> Teams should include new features in their presentation.
            <br />
            <br />
            <h2>Requirements from Students:</h2>
            <b>1.</b> Laptop is mandatory.
          </p>
          <div className="RulesButton">
            <button>REGISTER</button>
          </div>
        </div>
      </>
    );
  if (props.show === "true" && props.event === "adzap")
    return (
      <>
        <div className="Rules">
          <p className="extra-content">
            <h2>Rules for the Event:</h2>
            <b>1.</b> Participants will be given a product name and are required
            to sell the product to the judges
            <br />
            <b>2.</b> Product will be given on the spot by the judges.
            <br />
            <b>3.</b> Participants are required to come up with a jingle and a
            pitch for the product.
            <br />
            <b>4.</b> Teams should include new features in their presentation.
            <br />
            <br />
            <h2>Requirements from Students:</h2>
            <b>1.</b> Laptop is mandatory.
          </p>
          <div className="RulesButton">
            <button>REGISTER</button>
          </div>
        </div>
      </>
    );
  else if (props.show === "false") {
    return;
  }
}
