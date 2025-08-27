create table if not exists users(
  user_id serial primary key,
  first_name varchar(255) not null,
  last_name varchar(255) not null,
  username varchar(255) not null,
  account_password varchar(255) not null, -- "password" is an SQL keyword
  membership_status varchar(255) not null -- either "non-member", "member", or "admin"
);

create table if not exists messages(
  id serial primary key,
  time_posted timestamp not null,
  title varchar(255) not null,
  body text not null,
  posted_by integer not null,
  foreign key(posted_by) references users(user_id) on delete cascade
);