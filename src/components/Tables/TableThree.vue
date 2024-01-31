<template>
  <table>
    <thead>
      <tr>
        <th>Investors</th>
        <th>Comments</th>
        <th>Site visitation</th>
        <th>Reasons</th>

      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <h6>Femi Johnson</h6>
          femijohnson@gmail.com
        </td>
        <td>Wonderful</td>
        <td>Yes</td>
        <td>Nil</td>

      </tr>
      <tr>
        <td>
          <h6>Jane Doe</h6>
          janedoe@@gmail.com
        </td>
        <td>Interested</td>
        <td>No</td>
        <td>Other appointment</td>

      </tr>
      <tr>
        <td>
          <h6>Mike Sanwolu</h6>
          mikesanwolu@gmail.com
        </td>
        <td>Superb</td>
        <td>Yes</td>
        <td>Nil</td>

      </tr>
      <tr>
        <td>
          <h6>Daniel Mueller</h6>

          danielmueller@gmail.com
        </td>
        <td>Impressive</td>
        <td>Yes</td>
        <td>Nil</td>

      </tr>
      <tr>
        <td>
          <h6>Isaac Newton</h6>

          isaacnewton@gmail.com
        </td>
        <td>Wonderful</td>
        <td>No</td>
        <td>Unavailable</td>

      </tr>
      <tr>
        <td>
          <h6>Chindo Adel</h6>

          chindoabel@gmail.com
        </td>
        <td>Superb</td>
        <td>Yes</td>
        <td>Nil</td>

      </tr>
      <tr>
        <td>
          <h6>Samuel Adenuga</h6>

          samueladenuga@gmail.com
        </td>
        <td>Impressive</td>
        <td>No</td>
        <td>Unavailable</td>

      </tr>

    </tbody>
  </table>

  <blockquote> Responsive Table </blockquote>
</template>

<style scoped>
table {
  border-spacing: 1;
  border-collapse: collapse;
  background: #eee;
  border-radius: 6px;
  overflow: hidden;
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
  position: relative;
}
table * {
  position: relative;
}
table td,
table th {
  padding-left: 8px;
}
table thead tr {
  height: 60px;
  background: #eee;
  border-bottom: 1px solid #e3f1d5;
  font-size: 16px;
  box-shadow: 0px 4px 30px 0px rgba(0, 0, 0, 0.05);
}
table tbody tr {
  height: 48px;
  border-bottom: 1px solid #e3f1d5;
  background: var(--grey-light, #eee);
  box-shadow: 0px 4px 30px 0px rgba(0, 0, 0, 0.05);
}
table tbody tr:last-child {
  border: 0;
}
table td,
table th {
  text-align: left;
  width: 200px;
  height: 59px;
}
table td {
  color: var(--grey-dark, #808080);
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 14.4px;
}
table td h6 {
  color: var(--grey-dark, #000);
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 14.4px;
}
table td.l,
table th.l {
  text-align: right;
}
table td.c,
table th.c {
  text-align: center;
}
table td.r,
table th.r {
  text-align: center;
}

@media screen and (max-width: 35.5em) {
  table {
    display: block;
  }
  table > *,
  table tr,
  table td,
  table th {
    display: block;
  }
  table thead {
    display: none;
  }
  table tbody tr {
    height: auto;
    padding: 8px 0;
  }
  table tbody tr td {
    padding-left: 45%;
    margin-bottom: 12px;
  }
  table tbody tr td:last-child {
    margin-bottom: 0;
  }
  table tbody tr td:before {
    position: absolute;
    font-weight: 700;
    width: 40%;
    left: 10px;
    top: 0;
  }
  table tbody tr td:nth-child(1):before {
    content: 'Code';
  }
  table tbody tr td:nth-child(2):before {
    content: 'Stock';
  }
  table tbody tr td:nth-child(3):before {
    content: 'Cap';
  }
  table tbody tr td:nth-child(4):before {
    content: 'Inch';
  }
  table tbody tr td:nth-child(5):before {
    content: 'Box Type';
  }
}
body {
  background: #9bc86a;
  font: 400 14px 'Calibri', 'Arial';
  padding: 20px;
}

blockquote {
  color: white;
  text-align: center;
}
.btn {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 10px;
  align-self: stretch;
}
button {
  height: 40px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 5px;
  background: var(--gradient, linear-gradient(90deg, #227cbf 0%, #47b65c 100%));
  color: #fff;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 19.2px;
  justify-self: end;
}
</style>