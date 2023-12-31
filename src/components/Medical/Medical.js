import './medical.css';

export default function Medical(props) {
  return (
    <>
      <section className="medicalSection">
        <h1 className="medicalTitle">Major Medical - PIP - L&I Information</h1>
        <p>
          At this moment, ARC Massage and Family Wellness does bill towards L&I
          and PIP, but does not <strong>NOT</strong> bill Major Medical.
        </p>
        <p>
          We will possibly accept insurance and major medical in the future, but
          not at this moment.
        </p>
        <a
          rel="noreferrer"
          target="_blank"
          title="Intake Form"
          href="https://intakeq.com/new/spumpn/2i52sx"
        >
          {' '}
          Medical Massage Intake{' '}
        </a>
        <div>
          Fax Number: 206-258-8843 (place in footer next to phone as well)
        </div>
        <section>
          <h3 className="medicalTitle">Referral</h3>
          <p>
            If you bring in a referral from your doctor, we will provide you
            with a superbill upon request that you can send to your insurance to
            get a possible reimbursement through your insurance company.
          </p>
          <p>
            You can request a referral from your doctor based on your current
            complaints/issues.
          </p>
          <p>
            If you do not bring in a referral, we can still provide you with a
            superbill, but you have a much higher chance of receiving a
            reimbursement through your insurance if they accept a superbill and
            have a current referral from your doctor.
          </p>
        </section>
        <section>
          <h3 className="medicalTitle">Superbill</h3>
          <p>
            We highly encourage you to contact your insurance to see if they
            accept a superbill.
          </p>
          <p>
            We will not give reimbursement if insurance denies your superbill.
            Through this process, we cannot guarantee that insurance will accept
            the superbill, but it is the closest we can provide to make it
            possible for your insurance to cover the massage session.
          </p>
          <p>
            The superbill will be an itemized receipt given to the patient that
            records out-of-network services done. Insurance companes require
            this for out-of-network providers such as our company. This allows
            the insurance to reimburse the client directly, not the company.
          </p>
        </section>
        <section>
          <h3 className="medicalTitle">
            Contact us for any Information you have about superbill
          </h3>
          <p></p>
        </section>
      </section>
    </>
  );
}

/*

At thie time, ARC massage and family wellness center is unable to bill insaucne clients. We can howcver provide you with a superbill at your request. Prior to getting a superbill. We will needa  referral with diagnotistic codes on file. We strongly encourage call clients to cntact thsier insurance comapny prior ro service as we cannot guarentee reimbursement


*/
