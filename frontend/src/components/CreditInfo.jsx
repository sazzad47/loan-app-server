import { Typography, useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";
import bargraph from "../assets/bargraph.png";
import cople from "../assets/cople.gif";
import creditscore from "../assets/creditscore.png";
import creditscoregraph from "../assets/creditscoregraph.png";
import goodbadcredit from "../assets/goodbadcredit.png";
import metergraphics from "../assets/metergraphics.png";
import roadtogood from "../assets/roadtogood.png";
import topscore from "../assets/topscore.png";

const CreditInfo = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        border: `1px solid ${theme.palette.grey[100]}`,
        paddingTop: "10px",
        paddingLeft: "20px",
      }}
    >
      <Typography variant="h6">Credit Info</Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "30px",
          margin: "20px",
        }}
      >
        <img src={roadtogood} alt="road to good" />
        <Box>
          <Typography variant="h5" sx={{ fontSize: 16 }}>
            CLIENT INFORMATION AND RECOMMENDATIONS:
          </Typography>
          <Typography variant="body2">
            As your credit specialist, our most important job is to review your
            credit history reports with you and begin the process of disputing
            negative inaccurate items on your reports.
            <br /> Our next important job is to give you recommendations to
            follow, which will help you to speed up the process, achieve a
            higher score and keep it. While we do our part, please <br />
            read the following information and follow our steps and your score
            will start to improve quickly.
          </Typography>
        </Box>
      </Box>
      <Box sx={{ margin: "20px" }}>
        <ul>
          <li>
            <a
              href="#con1"
              style={{
                textDecoration: "none",
              }}
            >
              How does credit repair work?
            </a>
          </li>
          <li>
            <a
              href="#con2"
              style={{
                textDecoration: "none",
              }}
            >
              Credit Report Basics
            </a>
          </li>
          <li>
            <a
              href="#con3"
              style={{
                textDecoration: "none",
              }}
            >
              Do I have a right to know what’s in my report?
            </a>
          </li>
          <li>
            <a
              href="#con4"
              style={{
                textDecoration: "none",
              }}
            >
              What is a Credit Score?
            </a>
          </li>
          <li>
            <a
              href="#con5"
              style={{
                textDecoration: "none",
              }}
            >
              Credit Score Ranges and Their Meaning
            </a>
          </li>
          <li>
            <a
              href="#con6"
              style={{
                textDecoration: "none",
              }}
            >
              How do Credit Bureaus determine my credit score?{" "}
            </a>
          </li>
          <li>
            <a
              href="#con7"
              style={{
                textDecoration: "none",
              }}
            >
              What type of information do credit bureaus collect and sell?
            </a>
          </li>
          <li>
            <a
              href="#con8"
              style={{
                textDecoration: "none",
              }}
            >
              How does a credit bureau determine my score?
            </a>
          </li>
          <li>
            <a
              href="#con9"
              style={{
                textDecoration: "none",
              }}
            >
              What is the secret to a high credit score?
            </a>
          </li>
          <li>
            <a
              href="#con10"
              style={{
                textDecoration: "none",
              }}
            >
              What happens if you are denied credit or don’t get the terms you
              want?
            </a>
          </li>
          <li>
            <a href="#con1" style={{ textDecoration: "none" }}>
              The Fair Credit Reporting Act{" "}
            </a>
          </li>
          <li>
            <a href="#con12" style={{ textDecoration: "none" }}>
              How can I speed up the process?
            </a>
          </li>
          <li>
            <a href="#con12" style={{ textDecoration: "none" }}>
              7 steps to increase your credit score fast
            </a>
          </li>
        </ul>
      </Box>
      <Box sx={{ margin: "20px" }}>
        <Typography variant="h6">
          CLIENT INFORMATION AND RECOMMENDATIONS:
        </Typography>
        <Typography variant="body2">
          Credit repair is 100% legal. It works because of a law called “The
          Fair Credit Reporting Act.” The FCRA gives you the right to dispute
          any item on your credit report. If that item cannot be verified within
          a reasonable time (usually 30 days) it must be removed. Even accurate
          negative items can often be removed or negotiated away. This law is
          the basis of all credit repair and the foundation of our business.
        </Typography>
      </Box>
      <Box sx={{ margin: "20px" }}>
        <Typography variant="h6">
          CLIENT INFORMATION AND RECOMMENDATIONS:
        </Typography>
        <Box sx={{ display: "flex" }}>
          <Typography variant="body2">
            Your credit payment history and profile is the makeup of a credit
            report. These files or reports are maintained and sold by “consumer
            reporting agencies.” One type of consumer reporting agency is
            commonly known as a credit bureau. The largest three credit bureaus
            are Transunion, Equifax, and Experian. You have a credit record with
            these agencies if you have ever applied for a credit or charge
            account, a personal loan, or a job.Your credit record contains
            information about your income, debts, and credit payment history. It
            also indicates whether you have defaulted on any debts, have any
            outstanding judgments or child support, and whether or not you have
            any bankruptcies.
          </Typography>
          <img src={goodbadcredit} alt="goodbadcredit" />
        </Box>
      </Box>

      <Box sx={{ margin: "20px" }}>
        <Typography variant="h6">
          DO I HAVE A RIGHT TO KNOW WHAT'S IN MY REPORT?
        </Typography>
        <Typography variant="body2">
          Of course you do. By law, the agencies must give you a free report
          annually. However those free reports do not contain scores. For credit
          repair scores we recommend an inexpensive credit monitoring service.
        </Typography>
      </Box>

      <Box sx={{ margin: "20px" }}>
        <Typography variant="h6">WHAT IS A CREDIT SCORE?</Typography>
        <Typography variant="body2">
          A credit score is a number generated by a mathematical formula that is
          meant to predict credit worthiness. Credit scores range from 300-850.
          The higher your score is, the more likely you are to get a loan. The
          lower your score is, the less likely you are to get a loan. If you
          have a low credit score and you do manage to get approved for credit
          then your interest rate will be much higher than someone who had a
          good credit score and borrowed money. So, basically, having a high
          credit score can save many thousands of dollars over the life of your
          mortgage, auto loan, or credit card.
        </Typography>
      </Box>

      <Box sx={{ margin: "20px" }}>
        <Typography variant="h6">
          CREDIT SCORE RANGES AND THEIR MEANING
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box>
            <Typography variant="body2">
              <span style={{ fontWeight: "bold" }}>
                800 and Higher (Excellent)
              </span>
              With a credit score in this range no lender will ever disapprove
              your loan application. Additionally, the APR (Annual Percentage
              Rate) on your credit cards will be the lowest possible. You’ll be
              treated as royalty. Achieving this excellent credit rating not
              only requires financial knowledge and discipline and, but also a
              good credit history. Generally speaking, to achieve this excellent
              rating you must also use a substantial amount of credit on an
              ongoing monthly basis and always repay it ahead of time.
            </Typography>
            <Typography variant="body2">
              700 – 799 (Very Good) 27% of the United States population belongs
              to this credit score range. With this credit score range you will
              enjoy good rates and approved for nearly any type of credit loan
              or personal loan, whether unsecured or secured.
            </Typography>
          </Box>
          <img src={creditscore} alt="" />
        </Box>

        <Box>
          <Typography variant="body2">
            <span style={{ fontWeight: "bold" }}>680 – 699 (Good)</span>
            This range is the average credit score. In this range approvals are
            practically guaranteed but the interest rates might be marginally
            higher. If you’re thinking about a long term loan such as a
            mortgage, try working to increase your credit score higher than 720
            and you will be rewarded for your efforts – your long term savings
            will be noticeable.
          </Typography>
          <Typography
            variant="body2"
            sx={{ marginTop: "10px", marginBottom: "10px" }}
          >
            <span style={{ fontWeight: "bold" }}>620 -679 (OK or Fair)</span>
            Depending on what kind of loan or credit you are applying for and
            your credit history, you might find that the rates you are quoted
            aren’t best. That doesn’t mean that you won’t be approved but,
            certain restrictions will apply to the loan’s terms.
          </Typography>

          <Typography variant="body2">
            <span style={{ fontWeight: "bold" }}>580 – 619 (Poor)</span>
            With a poor credit rating you can still get an unsecured personal
            loan and even a mortgage, but, the terms and interest rates won’t be
            very appealing. You’ll be required to pay more over a longer period
            of time because of the high interest rates.
          </Typography>

          <Typography
            variant="body2"
            sx={{ marginTop: "10px", marginBottom: "10px" }}
          >
            <span style={{ fontWeight: "bold" }}>500 – 579 (Bad)</span>
            With a score in this range you can get a loan but nothing even close
            to what you expect it to be. Some people with bad credit apply for
            loans to consolidate debt in search for a fresh start. However, if
            you decide to do that then proceed cautiously. With a 500 credit
            score you need to make sure that you don’t default on payments or
            you’ll be making your situation worse and might head towards
            bankruptcy, which is not what you want.
          </Typography>
          <Typography
            variant="body2"
            sx={{ marginTop: "10px", marginBottom: "10px" }}
          >
            <span style={{ fontWeight: "bold" }}>499 and Lower (Very Bad)</span>
            If this is your score range you need serious and professional
            assistance with how you handle your credit. You’re making too many
            credit blunders and they will only get worse if you don’t take
            positive action. If you are thinking of a loan then keep in mind
            that if you do find a sub-prime lender (which won’t be easy), the
            rates will be very high and the terms will be very strict. We
            recommend that you fix your credit and only then move on to applying
            for a loan.
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography variant="h6">
              HOW DO CREDIT BUREAUS DETERMINE MY CREDIT SCORE?
            </Typography>
            <Typography variant="body2">35% - Payment History</Typography>
            <Typography variant="body2">30% - Debt Ratio</Typography>
            <Typography variant="body2">
              15% - Length of Credit History
            </Typography>
            <Typography variant="body2">10% - Types of Credit</Typography>
            <Typography variant="body2">
              10% - Number of Credit Inquiries
            </Typography>
            <Typography variant="body2">
              The percentages in this chart show how important each of the
              categories is in determining your Credit score. We will help you
              to remove negative items from your payment history. We will also
              show you how to maximize your debt ratio score, even if paying off
              credit cards is not an option.
            </Typography>
          </Box>
          <img alt="" src={creditscoregraph} />
        </Box>

        <Box>
          <Typography variant="h6">
            WHAT TYPE OF INFORMATION DO CREDIT BUREAUS COLLECT AND SELL?
          </Typography>

          <Typography variant="body2">
            Credit bureaus collect and sell four basic types of information:
          </Typography>
          <ol>
            <li>
              <Typography variant="body2" fontWeight="bold">
                Identification and employment information
              </Typography>
              <Typography variant="body2">
                Your name, birth date, Social Security number, employer, and
                spouse’s name are routinely recorded in your credit report. They
                may also provide information about your employment history, home
                ownership, income, and previous address, if a creditor requests
                this type of information.
              </Typography>
            </li>
            <li>
              <Typography variant="body2" fontWeight="bold">
                Public record information
              </Typography>
              <Typography variant="body2">
                Events that are a matter of public record, such as bankruptcies,
                foreclosures, or tax liens, may appear in your report.
              </Typography>
            </li>
            <li>
              <Typography variant="body2" fontWeight="bold">
                Inquiries
              </Typography>
              <Typography variant="body2">
                CRAs must maintain a record of all creditors who have asked for
                your credit history within the past year. It is generally
                beneficial to keep the number of inquires as low as possible.
              </Typography>
            </li>
            <li>
              <Typography variant="body2" fontWeight="bold">
                Payment history
              </Typography>
              <Typography variant="body2">
                Your accounts with different creditors are listed, along with
                the balances, high balances, and outstanding balances. Related
                events, such as referral of an overdue account to a collection
                agency, charge off accounts or other delinquencies may also be
                noted.
              </Typography>
            </li>
          </ol>
        </Box>

        <Box sx={{ display: "flex" }}>
          <Box>
            <Box>
              <Typography variant="h6">
                HOW DOES A CREDIT BUREAU DETERMINE MY SCORE?
              </Typography>
              <Typography variant="body2">
                Credit scoring models are complex and often vary among creditors
                and for different types of credit. If one factor changes, your
                score may change — but improvement generally depends on how that
                factor relates to other factors considered by the model.
              </Typography>
            </Box>
            <Box>
              <Typography variant="body2" fontWeight="bold">
                Scoring models generally evaluate the following types of
                information in your credit report:
              </Typography>
              <ul>
                <li>
                  <Typography variant="body2">
                    <span style={{ fontWeight: "bold" }}>
                      Do you pay your bills on time?
                    </span>
                    Payment history is a major factor in credit scoring. If you
                    have paid bills late, have collections, or declared
                    bankruptcy, these events will not reflect well in your
                    credit score.
                  </Typography>
                </li>
                <li>
                  <Typography variant="body2">
                    <span style={{ fontWeight: "bold" }}>
                      Do you have a long credit history?
                    </span>
                    Generally speaking, the longer your history of holding
                    accounts is, the more trusted you will be as a borrower.
                  </Typography>
                </li>
                <li>
                  <Typography variant="body2">
                    <span style={{ fontWeight: "bold" }}>
                      Have you applied for credit recently?
                    </span>
                    If you have many recent inquires this can be construed as
                    being negative by the credit reporting agencies. Only apply
                    for credit when you really want it.
                  </Typography>
                </li>
                <li>
                  <Typography variant="body2">
                    <span style={{ fontWeight: "bold" }}>
                      What is your outstanding debt?
                    </span>
                    It is important that you are not using all of your available
                    credit. If all of your credit cards are maxed out, your
                    scores will reflect that you are not managing your debt
                    wisely.
                  </Typography>
                </li>
              </ul>
            </Box>
          </Box>
          <img alt="" src={metergraphics} height={300} />
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography variant="h6">
              WHAT IS THE SECRET TO A HIGH CREDIT SCORE?
            </Typography>
            <ol>
              <li>
                <Typography variant="body2">
                  {" "}
                  Always pay your bills on time!
                </Typography>
              </li>
              <li>
                <Typography variant="body2">
                  {" "}
                  Don’t close old accounts!
                </Typography>
              </li>
              <li>
                <Typography variant="body2">
                  {" "}
                  Don’t apply for any new credit!
                </Typography>
              </li>
              <li>
                <Typography variant="body2" fontWeight="bold">
                  Don’t ever use more than 30% of your available credit on each
                  credit card!
                </Typography>
              </li>
            </ol>
          </Box>
          <img src={topscore} alt="" />
        </Box>

        <Box sx={{ display: "flex", marginTop: "10px" }}>
          <Box>
            <Typography variant="h6">
              WHAT HAPPENS IF YOU ARE DENIED CREDIT OR DON’T GET THE TERMS YOU
              WANT?
            </Typography>
            <Typography variant="body1">
              If you are denied credit, the Equal Credit Opportunity Act
              requires that the creditor give you a notice that tells you the
              specific reasons your application was rejected or the fact that
              you have the right to learn the reasons if you ask within 60 days.
              Indefinite and vague reasons for denial are illegal, so ask the
              creditor to be specific. Acceptable reasons include: “Your income
              was low” or “You haven’t been employed long enough.” Unacceptable
              reasons include: “You didn’t meet our minimum standards” or “You
              didn’t receive enough points on our credit scoring system.”
            </Typography>
            <br />
            <Typography variant="body1">
              If a creditor says you were denied credit because you are too near
              your credit limits on your charge cards or you have too many
              credit card accounts, you may want to reapply after paying down
              your balances or closing some accounts. Credit scoring systems
              consider updated information and change over time.
            </Typography>
            <br />

            <Typography variant="body1">
              If you’ve been denied credit, or didn’t get the rate or credit
              terms you want, ask the creditor if a credit scoring system was
              used. If so, ask what characteristics or factors were used in that
              system, and the best ways to improve your application. If you get
              credit, ask the creditor whether you are getting the best rate and
              terms available and, if not, why. If you are not offered the best
              rate available because of inaccuracies in your credit report, be
              sure to dispute the inaccurate information in your credit report.
            </Typography>
          </Box>
          <img src={cople} alt="" />
        </Box>

        <Box sx={{ marginTop: "10px", marginBottom: "10px" }}>
          <Typography variant="h6">HOW CAN I SPEED UP THE PROCESS?</Typography>
          <Typography variant="body2">
            Following these 7 steps will increase your score quickly.
          </Typography>
        </Box>

        <Box>
          <Typography variant="h6">CREDIT REPORT BASICS</Typography>
          <ol>
            <li>
              <Typography variant="body2" fontWeight="bold">
                Order fresh new copies of your credit reports from all 3
                bureaus: Equifax, Experian and TransUnion. *We will assist you
                with this step.
              </Typography>
              <Box display="flex">
                <Typography variant="body2">
                  Credit reports are constantly changing. Therefore it is
                  important to up-to-date copies. A good rule of thumb to know
                  is: If someone else runs your score or reports, this will hurt
                  your score. However, if you order your own credit reports
                  (which we will help you with) your score will not be affected.
                  You also may want to sign up for credit monitoring to see your
                  reports and score and track changes as they happen.
                </Typography>
                <img src={bargraph} height={250} alt="" />
              </Box>
            </li>
            <li>
              <Typography variant="body2" fontWeight="bold">
                Correct all inaccuracies on your Credit Reports. *We will assist
                you with this step.
              </Typography>
              <Typography variant="body2">
                Go through your credit reports very carefully. Especially look
                for; Late payments, charge-offs, collections or other negative
                items that aren't yours, Accounts listed as "settled," "paid
                derogatory," "paid charge-off" or anything other than "current"
                or "paid as agreed" if you paid on time and in full, Accounts
                that are still listed as unpaid that were included in a
                bankruptcy, Negative items older than seven years (10 in the
                case of bankruptcy) that should have automatically fallen off
                your report (you must be careful with this last one, because
                sometimes scores actually go down when bad items fall off your
                report. It's a quirk in the FICO credit-scoring software, and
                the potential effect of eliminating old negative items is
                difficult to predict in advance). Also make sure you don't have
                duplicate collection notices listed. For example; if you have an
                account that has gone to collections, the original creditor may
                list the debt, as well as the collection agency. Any duplicates
                must be removed! Make sure that your proper credit lines are
                posted on your Credit Reports. Often, in an effort to make you
                less desirable to their competitors, some creditors will not
                post your proper credit line. Showing less available credit can
                negatively impact your credit score. If you see this happening
                on your credit report, you have a right to complain and bring
                this to their attention. If you have bankruptcies that should be
                showing a zero balance…make sure they show a zero balance! Very
                often the creditor will not report a "bankruptcy charge-off" as
                a zero balance until it's been disputed.
              </Typography>
            </li>
            <li>
              <Typography variant="body2" fontWeight="bold">
                If you have any negative marks on your credit report, negotiate
                with the creditor or lender to remove it. *We will assist you
                with this step.
              </Typography>
              <Typography variant="body2">
                If you are a long time customer and it's something simple like a
                one-time late payment, a creditor will often wipe it away to
                keep you as a loyal customer. Sometimes they will do this if you
                call and ask. However, if you have a serious negative mark (such
                as a long overdue bill that has gone to collections), always
                negotiate a payment in exchange for removal of the negative
                item. Always make sure you have this agreement with them in
                writing. Do not pay off a bill that has gone to collections
                unless the creditor agrees in writing that they will remove the
                derogatory item from your credit report. This is important; when
                speaking with the creditor or collection agency about a debt
                that has gone to collections, do not admit that the debt is
                yours. Admission of debt can restart the statute of limitations,
                and may enable the creditor to sue you. You are also less likely
                to be able to negotiate a letter of deletion if you admit that
                this debt is yours. Simply say "I'm calling about account number
                ________" instead of "I'm calling about my past due debt."
                Again, as your credit specialist, we will help you with this
                step.
              </Typography>
            </li>
            <li>
              <Typography variant="body2" fontWeight="bold">
                Pay all credit cards and any revolving credit down to below 30%
                of the available credit line.
              </Typography>
              <Typography variant="body2">
                This step alone can make a huge impact on your score. The credit
                scoring system wants to make sure you aren't overextended, but
                at the same time, they want to see that you do indeed use your
                credit. 30% of the available credit line seems to be the magic
                "balance vs. credit line" ratio to have. For example; if you
                have a Credit Card with a $10,000 credit line, make sure that
                never more than $3000 (even if you pay your account off in full
                each month). If your balances are higher than 30% of the
                available credit line, pay them down. Here is another thing you
                can try; ask your long time reditors if they will raise your
                Credit Line without checking your FICO score or your Credit
                Report. Tell them that you're shopping for a house and you can't
                afford to have any hits on your credit report. Many will not but
                some will. step.
              </Typography>
            </li>
            <li>
              <Typography variant="body2" fontWeight="bold">
                Do not close your old credit card accounts.
              </Typography>
              <Typography variant="body2">
                Old established accounts show your history, and tell about your
                stability and paying habits. If you have old credit card
                accounts that you want to stop using, just cut up the cards or
                keep them in a drawer, but keep the accounts open.
              </Typography>
            </li>
            <li>
              <Typography variant="body2" fontWeight="bold">
                Avoid applying for new credit.
              </Typography>
              <Typography variant="body2">
                Do not apply for any new credit! Each time you apply for new
                credit, your credit report gets checked. New credit cards will
                not help your credit score and a credit account less than one
                year old may hurt your credit score. Use your cards and credit
                as little as possible until the next credit scoring.
              </Typography>
            </li>
            <li>
              <Typography variant="body2" fontWeight="bold">
                Have at least three revolving credit lines and one active (or
                paid) installment loan listed on your Credit Report.
              </Typography>
              <Typography variant="body2">
                The scoring system wants to see that you maintain a variety of
                credit accounts. It also wants to see that you have 3 revolving
                credit lines. If you do not have three active credit cards, you
                might want to open some (but keep in mind that if you do, you
                will need to wait some time before rescoring). If you have poor
                credit and are not approved for a typical credit card, you might
                want to set up a "secured credit card" account. This means that
                you will have to make a deposit that is equal or more than your
                limit, which guarantees the bank that you will repay the loan.
                It's an excellent way to establish credit. Examples of an
                installment loan would be a car loan, or it could be for
                furniture or a major appliance. In addition to the above, having
                a mortgage listed will bring your score even higher.
              </Typography>
            </li>
          </ol>
        </Box>
        <Box>
          <Typography variant="body1" fontWeight="bold">
            THROUGHOUT THIS PROCESS, ALWAYS REMEMBER:
          </Typography>
          <Typography variant="body2">
            It takes up to 30 Days for any of these items to get reported and
            often longer to reflect on your Credit History Reports. Very often
            we must write a series of letters challenging the credit bureaus.
            Each time we must allow them 30 days to respond. It can feel like a
            slow process, but hang in there, because it does work and the end
            result will save you a tremendous amount of money.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default CreditInfo;
