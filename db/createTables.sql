create table if not exists users(
  id serial primary key,
  first_name varchar(255) not null,
  last_name varchar(255) not null,
  username varchar(255) not null,
  password varchar(255) not null,
  membership_status varchar(255) not null -- either "non-member", "member", or "admin"
);

create table if not exists messages(
  id serial primary key,
  time_posted timestamptz default current_timestamp,
  title varchar(255) not null,
  body text not null,
  author integer not null,
  foreign key(author) references users(id) on delete cascade
);