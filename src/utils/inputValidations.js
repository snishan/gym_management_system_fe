export const first_name_validation = {
  name: "firstName",
  label: "first name",
  type: "text",
  id: "first-name",
  placeholder: "your first name ...",
  validation: {
    required: {
      value: true,
      message: "required",
    },
    maxLength: {
      value: 30,
      message: "30 characters max",
    },
  },
};

export const last_name_validation = {
  name: "lastName",
  label: "last name",
  type: "text",
  id: "last-name",
  placeholder: "your last name ...",
  validation: {
    required: {
      value: true,
      message: "required",
    },
    maxLength: {
      value: 30,
      message: "30 characters max",
    },
  },
};

export const email_validation = {
  name: "email",
  label: "email address",
  type: "email",
  id: "email",
  placeholder: "your email address ...",
  validation: {
    required: {
      value: true,
      message: "required",
    },
    pattern: {
      value:
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message: "not valid",
    },
  },
};

export const phone_validation = {
  name: "contactNo",
  label: "phone number",
  type: "tel",
  id: "phone",
  placeholder: "your phone number ...",
  validation: {
    required: {
      value: true,
      message: "required",
    },
    pattern: {
      value: /^0\d{9}$/,
      message: "not valid",
    },
    minLength: {
      value: 10,
      message: "min 10 characters",
    },
    maxLength: {
      value: 10,
      message: "min 10 characters",
    },
  },
};

export const password_validation = {
  name: "password",
  label: "password",
  type: "password",
  id: "password",
  placeholder: "type password ...",
  validation: {
    required: {
      value: true,
      message: "required",
    },
    minLength: {
      value: 6,
      message: "min 6 characters",
    },
  },
};

export const retype_password_validation = {
  name: "retypePassword",
  label: "retype password",
  type: "password",
  id: "retypePassword",
  placeholder: "retype password ...",
  validation: {
    required: {
      value: true,
      message: "required",
    },
    validate: (value, { password }) => {
      if (value === password) {
        return true;
      } else {
        return "passwords do not match";
      }
    },
  },
};

export const appointment_data_validation = {
  name: "date",
  label: "date",
  type: "date",
  id: "date",
  placeholder: "select date",
  validation: {
    required: {
      value: true,
      message: "required",
    },
  },
};

export const appointment_time_validation = {
  name: "time",
  label: "Time",
  type: "time",
  id: "time",
  placeholder: "select time",
  validation: {
    required: {
      value: true,
      message: "required",
    },
  },
};

export const remark_validation = {
  name: "remark",
  label: "Remark",
  type: "textarea",
  id: "remark",
  placeholder: "",
  validation: {
    required: {
      value: true,
      message: "required",
    },
  },
};

export const prduct_name_validation = {
  name: "name",
  label: "Product name",
  type: "text",
  id: "product-name",
  placeholder: "Product Name",
  validation: {
    required: {
      value: true,
      message: "required",
    },
    maxLength: {
      value: 50,
      message: "50 characters max",
    },
  },
};

export const prduct_discription_validation = {
  name: "content",
  label: "Product discriptiin",
  type: "text",
  id: "product-discriptiin",
  placeholder: "Product Discriptiin",
  validation: {
    required: {
      value: true,
      message: "required",
    },
    maxLength: {
      value: 500,
      message: "500 characters max",
    },
  },
};

export const prduct_count_validation = {
  name: "count",
  label: "Product count",
  type: "number",
  id: "product-count",
  placeholder: "Product count",
  validation: {
    required: {
      value: true,
      message: "required",
    },
    maxLength: {
      value: 100,
      message: "100 characters max",
    },
  },
};

export const prduct_price_validation = {
  name: "price",
  label: "Product price (Rs.)",
  type: "number",
  id: "product-price",
  placeholder: "Product price",
  validation: {
    required: {
      value: true,
      message: "required",
    },
  },
};

export const prduct_img_validation = {
  name: "imageData",
  label: "Product image",
  type: "file",
  id: "product-image",
  placeholder: "Product image",
  validation: {
    required: {
      value: true,
      message: "required",
    },
  },
};

export const username_validation = {
  name: "username",
  label: "User Name",
  type: "text",
  id: "username",
  placeholder: "Username",
  validation: {
    required: {
      value: true,
      message: "required",
    },
    maxLength: {
      value: 30,
      message: "30 characters max",
    },
  },
};